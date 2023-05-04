// Sayfa verilerini kaydetmek için bir işlev tanımlayın
function savePage() {
  // Sayfa verilerini bir nesne içine toplayın
  var pageData = {
    title: document.title,
    content: document.body.innerHTML
  };

  // Yerel depolama alanına kaydedin
  localStorage.setItem('pageData', JSON.stringify(pageData));

  // Kullanıcıya geri bildirim verin
  alert('Sayfa başarıyla kaydedildi!');
}

// Kaydet düğmesi ekleyin
var saveButton = document.createElement('button');
saveButton.textContent = 'Kaydet';
saveButton.addEventListener('click', savePage);

// Düğmeyi sayfaya ekleyin
document.body.appendChild(saveButton);
