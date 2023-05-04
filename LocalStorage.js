// Sayfa verilerini bir nesne içine topla
var pageData = {
  title: document.title,
  content: document.body.innerHTML
};

// Yerel depolama alanına kaydet
localStorage.setItem('pageData', JSON.stringify(pageData));

// Sayfa başlığını güncelle
document.title = 'Yeni Sayfa Başlığı';

// Sayfa içeriğini güncelle
document.body.innerHTML = '<p>Yeni Sayfa İçeriği</p>';

// Kaydedilen verileri yerel depolama alanından yükle
var savedData = JSON.parse(localStorage.getItem('pageData'));

// Sayfa başlığını kaydedilenden geri yükle
document.title = savedData.title;

// Sayfa içeriğini kaydedilenden geri yükle
document.body.innerHTML = savedData.content;
