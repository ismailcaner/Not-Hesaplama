function saveData() {
  const inputData = document.getElementById("vrtvize"); // input alanını alır
  const inputValue = inputData.value; // inputtan değeri alır

  // Süresiz çerez oluşturma
  document.cookie = "myCookie=" + inputValue + "; expires=0; path=/";
}
function saveData() {
  console.log("saveData çalıştı!");
}

function hesapla() {
    var vize1 = document.getElementById("vrtvize").value;
    var final1 = document.getElementById("vrtfinal").value;
    var vize2 = document.getElementById("intpvize").value;
    var final2 = document.getElementById("intpfinal").value;
    var vize3 = document.getElementById("gorpvize").value;
    var final3 = document.getElementById("gorpfinal").value;
    var vize4 = document.getElementById("yazkvize").value;
    var final4 = document.getElementById("yazkfinal").value;
    var vize5 = document.getElementById("ybnvize").value;
    var final5 = document.getElementById("ybnfinal").value;
    var vize6 = document.getElementById("trcvize").value;
    var final6 = document.getElementById("trcfinal").value;
    var vize7 = document.getElementById("trhvize").value;
    var final7 = document.getElementById("trhfinal").value;
    var yuzde1 = vize1 * 0.4 + final1 * 0.6;
    var yuzde2 = vize2 * 0.4 + final2 * 0.6;
    var yuzde3 = vize3 * 0.4 + final3 * 0.6;
    var yuzde4 = vize4 * 0.4 + final4 * 0.6;
    var yuzde5 = vize5 * 0.4 + final5 * 0.6;
    var yuzde6 = vize6 * 0.4 + final6 * 0.6;
    var yuzde7 = vize7 * 0.4 + final7 * 0.6;
    var yuzde1 = yuzde1.toFixed(1);
    var yuzde2 = yuzde2.toFixed(1);
    var yuzde3 = yuzde3.toFixed(1);
    var yuzde4 = yuzde4.toFixed(1);
    var yuzde5 = yuzde5.toFixed(1);
    var yuzde6 = yuzde6.toFixed(1);
    var yuzde7 = yuzde7.toFixed(1);
    document.getElementById("conclusion1").innerHTML = yuzde1;
    document.getElementById("conclusion2").innerHTML = yuzde2;
    document.getElementById("conclusion3").innerHTML = yuzde3;
    document.getElementById("conclusion4").innerHTML = yuzde4;
    document.getElementById("conclusion5").innerHTML = yuzde5;
    document.getElementById("conclusion6").innerHTML = yuzde6;
    document.getElementById("conclusion7").innerHTML = yuzde7;
      }
