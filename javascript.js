function hesapla() {
    var vize1 = document.getElementById("vrtvize").value;
    var final1 = document.getElementById("vrtfinal").value;
    var yuzdevize = document.getElementById("vize").value;
    var yuzdefinal = document.getElementById("final").value;
    var yuzde1 = (vize1 * yuzdevize) / 100;
    var yuzde2 = (final1 * yuzdefinal) /100;
    var sonuc = yuzde1 + yuzde2;
    var sonuc = sonuc.toFixed(0);
    document.getElementById("conclusion1").innerHTML = sonuc;
      }

    function preventScroll(event) {
      event.preventDefault();
    }
    document.addEventListener('touchmove', preventScroll, { passive: false });
