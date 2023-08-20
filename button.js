//clear
function temizle() {
  document.getElementById('sonuc').innerHTML = '';
  document.getElementById('dersvize').value = '';
  document.getElementById('dersfinal').value = '';
}

//save
function kaydet() {
        var input = document.getElementById("vize");
        var value = input.value.trim();
        
        if (value !== "") {
            if (parseInt(value) < 1) {
                input.value = "";
            } else if (parseInt(value) > 100) {
                input.value = value.slice(0, -1);
            }
        }
      
        var input = document.getElementById("final");
        var value = input.value.trim();
        
        if (value !== "") {
            if (parseInt(value) < 1) {
                input.value = "";
            } else if (parseInt(value) > 100) {
                input.value = value.slice(0, -1);
            }
        }
      
          var vize = document.getElementById("dersvize").value;
          var final = document.getElementById("dersfinal").value;
          var yuzdevize = document.getElementById("vize").value;
          var yuzdefinal = document.getElementById("final").value;
          var yuzde1 = (vize * yuzdevize) / 100;
          var yuzde2 = (final * yuzdefinal) /100;
          var sonuc = yuzde1 + yuzde2;
          var sonuc = sonuc.toFixed(1);
          document.getElementById("sonuc").innerHTML = sonuc;
            
        

        var deger1 = document.getElementById('vize').value;
        var deger2 = document.getElementById('final').value;
        localStorage.setItem('veri1', deger1);
        localStorage.setItem('veri2', deger2);
        keyboardIsVisible = true;
      }
  
      window.onload = function() {
        var veri1 = localStorage.getItem('veri1');
        var veri2 = localStorage.getItem('veri2');
          document.getElementById('vize').value = veri1;
          document.getElementById('final').value = veri2;
          keyboardIsVisible = true;
        
      }
