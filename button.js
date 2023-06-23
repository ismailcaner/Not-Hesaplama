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

//save butonu
 // Önbelleğe kaydetme işlemi
    function kaydet() {
      var deger1 = document.getElementById('vize').value;
      var deger2 = document.getElementById('final').value;
      
      // Verileri önbelleğe kaydetme
      localStorage.setItem('veri1', deger1);
      localStorage.setItem('veri2', deger2);
    }

    // Yükleme işlemi
    window.onload = function() {
      var veri1 = localStorage.getItem('veri1');
      var veri2 = localStorage.getItem('veri2');
      
      // Kaydedilen verileri yükleme
      if (veri1 !== null) {
        document.getElementById('input1').value = veri1;
      }
      
      if (veri2 !== null) {
        document.getElementById('input2').value = veri2;
      }
    }
