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

// Sayfa yüklendiğinde çalışacak işlevi tanımlayın
function loadPage() {
  // Local storage'dan verileri alın
  var pageData = localStorage.getItem('pageData');

  // Veriler varsa, sayfa içeriğini yeniden oluşturun
  if (pageData) {
    pageData = JSON.parse(pageData);
    document.title = pageData.title;
    document.body.innerHTML = pageData.content;
  }
}

// Sayfa yüklendiğinde loadPage işlevini çağırın
window.addEventListener('load', loadPage);
