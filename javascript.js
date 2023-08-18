function hesapla() {
                          var input = document.getElementById("dersvize");
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
      }

    function preventScroll(event) {
      event.preventDefault();
    }
    document.addEventListener('touchmove', preventScroll, { passive: false });


 document.addEventListener("DOMContentLoaded", function() {
        var bildirimButton = document.getElementById("save");
        var bildirimDiv = document.getElementById("bildirim");
        
        bildirimButton.addEventListener("click", function() {

          bildirimDiv.style.display = "block";
          
          setTimeout(function() {
            bildirimDiv.style.display = "none";
          }, 1000);
        });
      });
