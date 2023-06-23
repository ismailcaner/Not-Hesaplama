//clear butonu
function clearElements() {
  var elements = document.getElementsByClassName("sonuc");
  {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
  var elements = document.getElementsById("vize");
  {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
    var elements = document.getElementsById("final");
  {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
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
