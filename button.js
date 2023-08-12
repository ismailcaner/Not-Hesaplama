//clear butonu
function temizle() {
  document.getElementById('sonuc').innerHTML = '';
  document.getElementById('dersvize').value = '';
  document.getElementById('dersfinal').value = '';
}

//save butonu
    function kaydet() {
      var deger1 = document.getElementById('vize').value;
      var deger2 = document.getElementById('final').value;
      localStorage.setItem('veri1', deger1);
      localStorage.setItem('veri2', deger2);
    }

    window.onload = function() {
      var veri1 = localStorage.getItem('veri1');
      var veri2 = localStorage.getItem('veri2');
        document.getElementById('vize').value = veri1;
        document.getElementById('final').value = veri2;
      
    }
