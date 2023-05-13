function hesapla() {
    var vize1 = document.getElementById("vize.1").value;
    var final1 = document.getElementById("final.1").value;

    var yuzde1 = vize1 * 0.4 + final1 * 0.6;
  
    var yuzde1 = yuzde1.toFixed(1);

    document.getElementById("conclusion.1").innerHTML = yuzde1;

      }
