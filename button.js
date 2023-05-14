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

document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.getElementById('saveButton');
  const inputs = document.querySelectorAll('input');
  const spans = document.querySelectorAll('span');
  const saveButton = document.getElementById('saveButton');

  // Sayfa yüklendiğinde verileri kontrol et ve yükle
  loadSavedData();

  // Verileri yükleme işlemi
  function loadSavedData() {
    const savedData = localStorage.getItem('savedData');

    if (savedData) {
      const data = JSON.parse(savedData);

      inputs.forEach(function(input, index) {
        const inputKey = `input${index+1}`;

        if (inputKey in data) {
          input.value = data[inputKey];
          spans[index].textContent = data[inputKey];
        }
      });
    }
  }

  // Verileri kaydetme işlemi
  saveButton.addEventListener('click', function() {
    const data = {};

    inputs.forEach(function(input, index) {
      const inputKey = `input${index+1}`;
      data[inputKey] = input.value;
      spans[index].textContent = input.value;
    });

    localStorage.setItem('savedData', JSON.stringify(data));

    alert('Veriler kaydedildi.');
  });
});
