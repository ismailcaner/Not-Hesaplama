//clear butonu
function clearElements() {
  var elements = document.getElementsByClassName("sonuc");
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
  var elements = document.getElementsByClassName("input");
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
}

//kaydetme btn

const inputs = document.querySelectorAll('input');
const spans = document.querySelectorAll('span');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

saveButton.addEventListener('click', function() {
  const data = {};

  // Input değerlerini kaydet
  inputs.forEach(function(input, index) {
    data[`input${index+1}`] = input.value;

    // Input değerlerini ilgili spanlara aktar
    spans[index].textContent = input.value;
  });

  localStorage.setItem('savedData', JSON.stringify(data));

  alert('Veriler kaydedildi.');
});

loadButton.addEventListener('click', function() {
  const savedData = localStorage.getItem('savedData');

  if (savedData) {
    const data = JSON.parse(savedData);

    // Input değerlerini yükle ve ilgili spanlara aktar
    inputs.forEach(function(input, index) {
      input.value = data[`input${index+1}`] || '';
      spans[index].textContent = input.value;
    });

    alert('Veriler yüklendi.');
  } else {
    alert('Kaydedilmiş veri bulunamadı.');
  }
});
