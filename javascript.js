function hesapla() {
// yalnızca 1 ile 100 arası değer girişine izin verme işlemi
    var input = document.getElementById("dersvize");
    var value = input.value.trim();
    
    if (value !== "") {
        if (parseInt(value) < 1) {
            input.value = "";
        } else if (parseInt(value) > 100) {
            input.value = value.slice(0, -1);
        }
    }
  
    var input = document.getElementById("dersfinal");
    var value = input.value.trim();
    
    if (value !== "") {
        if (parseInt(value) < 1) {
            input.value = "";
        } else if (parseInt(value) > 100) {
            input.value = value.slice(0, -1);
        }
    }

//girilen değer yok ise sonuç ekranını tamamen temizleme işlemi
    var input1 = document.getElementById('dersvize');
    var input2 = document.getElementById('dersfinal');
    var sonuc = document.getElementById('sonuc');
  
    if (input1.value || input2.value) {
    var vize = document.getElementById("dersvize").value;
    var final = document.getElementById("dersfinal").value;
    var yuzdevize = document.getElementById("vize").value;
    var yuzdefinal = document.getElementById("final").value;
    var yuzde1 = (vize * yuzdevize) / 100;
    var yuzde2 = (final * yuzdefinal) /100;
    var sonuc = yuzde1 + yuzde2;
    var sonuc = sonuc.toFixed(1);
    document.getElementById("sonuc").innerHTML = sonuc;
  
    } else {
        sonuc.textContent = "";
    }


            
function kaydet() {
    // yalnızca 1 ile 100 arası değer girişine izin verme işlemi
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
          
    //girilen değer yok ise sonuç ekranını tamamen temizleme işlemi
            var input1 = document.getElementById('dersvize');
            var input2 = document.getElementById('dersfinal');
            var sonuc1 = document.getElementById('sonuc');
          
            if (input1.value || input2.value) {
            var vize = document.getElementById("dersvize").value;
            var final = document.getElementById("dersfinal").value;
            var yuzdevize = document.getElementById("vize").value;
            var yuzdefinal = document.getElementById("final").value;
            var yuzde1 = (vize * yuzdevize) / 100;
            var yuzde2 = (final * yuzdefinal) /100;
            var sonuc = yuzde1 + yuzde2;
            var sonuc = sonuc.toFixed(1);
            document.getElementById("sonuc").innerHTML = sonuc;
          
            } else {
                sonuc1.textContent = "";
            }
            
    //girilen değerleri önbelleğe kaydetme işlemi
            var deger1 = document.getElementById('vize').value;
            var deger2 = document.getElementById('final').value;
            localStorage.setItem('veri1', deger1);
            localStorage.setItem('veri2', deger2);
            keyboardIsVisible = true;
          }
    //sayfa her yüklendiğinde değerleri tekrar yerlerine yerleştirme işlemi
          window.onload = function() {
            var veri1 = localStorage.getItem('veri1');
            var veri2 = localStorage.getItem('veri2');
              document.getElementById('vize').value = veri1;
              document.getElementById('final').value = veri2;
              keyboardIsVisible = true;


              //ekrandaki öğlerin hareketini kapatma işlemi
function preventScroll(event) {
event.preventDefault();
}
document.addEventListener('touchmove', preventScroll, { passive: false });
}
          }
