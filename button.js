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

 document.addEventListener("DOMContentLoaded", function() {
    var girisAlan = document.getElementById("final");
    var buton = document.getElementById("save");
    var keyboardIsVisible = false; // Klavye varsayılan olarak kapalıdır
    
    // Giriş alanına odaklandığında
    girisAlan.addEventListener("focus", function() {
      keyboardIsVisible = true; // Klavye açıldı
    });
    
    // Giriş alanından çıkıldığında
    girisAlan.addEventListener("blur", function() {
      keyboardIsVisible = false; // Klavye kapandı
    });
    
    // Butona tıklama olayı
    buton.addEventListener("click", function() {
      if (keyboardIsVisible) {
        girisAlan.focus(); // Klavye açıksa giriş alanına odaklan
      }
    });
  });
