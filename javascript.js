function hesapla() {
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
