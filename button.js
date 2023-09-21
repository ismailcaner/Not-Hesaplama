function temizle() {
//not ve sonuç kısımlarını temizleme işlemi
  clear.style.opacity= 0.5;
  openpop.style.opacity = 0.5;
  document.getElementById('sonuc').innerHTML = '';
  document.getElementById('dersvize').value = '';
  document.getElementById('dersfinal').value = '';
}

function duzenleVazgec(){

    duzenleFormDiv.style.display = "none";
}

function vazgec(){

    modal.style.display= "none";
    document.getElementById('dersadi').value= "";
}

document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("openpop");
  const closeButton = document.getElementById("closepop");
  const modal = document.getElementById("modal");
  const input1 = document.getElementById("dersvize");
  const input2 = document.getElementById("dersfinal");
  const input3 = document.getElementById("dersadi");
  
  openButton.addEventListener("click", function (event) {
      // İlk ve ikinci input alanlarının değerlerini alın
      const deger1 = input1.value.trim(); // trim ile boşlukları kaldırın
      const deger2 = input2.value.trim();
      // Eğer her iki input alanı da boşsa
      if (deger1 === "" && deger2 === "") {
          // Butonun varsayılan davranışını engelle (tıklanmasını engelle)
          event.preventDefault();
      }
      else  {
          modal.style.display = "block";
          saved.style.opacity=0.5;
      }
  });
});



var veriler = JSON.parse(localStorage.getItem("veriler")) || [];
var siradakiRenkIndex = veriler.length % 2; // İlk satırı beyaz yapmak için
var renkler = ["white", "lightgray"];

function veriAktar() {
    var input1 = document.getElementById("dersadi").value;
    var input2 = document.getElementById("dersvize").value;
    var input3 = document.getElementById("dersfinal").value;
    var input4 = document.getElementById("sonuc").innerHTML;

    if (input1 === "") {
        return false;
    }
    // Sıradaki renk indeksini kullanarak arka plan rengini belirle
    tr.style.backgroundColor = renkler[siradakiRenkIndex];
    // Sıradaki renk indeksini güncelle
    siradakiRenkIndex = (siradakiRenkIndex + 1) % renkler.length;
    
    modal.style.display = "none";
    openpop.style.opacity = 0.5;

    var tablo = document.getElementById("tabloGovdesi");
    var newRow = tablo.insertRow(tablo.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = input1;
    cell2.innerHTML = input2;
    cell3.innerHTML = input3;
    cell4.innerHTML = input4;

    var cell5 = newRow.insertCell(4);
    var silButon = document.createElement("i");
    silButon.className = "fas fa-trash";
    silButon.addEventListener("click", function () {
        var satir = this.parentNode.parentNode;
        tablo.deleteRow(satir.rowIndex - 1);
       

        var silinecekVeri = {
            veri1: input1,
            veri2: input2,
            veri3: input3,
            veri4: input4
        };

        veriler = veriler.filter(function (veri) {
            return JSON.stringify(veri) !== JSON.stringify(silinecekVeri);
        });

        localStorage.setItem("veriler"JSON.stringify(veriler));
    });
    
    cell5.appendChild(silButon);

    var cell6 = newRow.insertCell(5);
    var duzenleButon = document.createElement("i");
    duzenleButon.className = "fas fa-edit";
    duzenleButon.addEventListener("click", function (event) {
        duzenleFormDiv.style.display = "block";
        event.preventDefault();

        var satir = this.parentNode.parentNode;
        var hucreler = satir.getElementsByTagName("td");
        var duzenleDersadi = document.getElementById("duzenleDersadi");
        var duzenleDersvize = document.getElementById("duzenleDersvize");
        var duzenleDersfinal = document.getElementById("duzenleDersfinal");
        var duzenleDerssonuc = document.getElementById("duzenSonuc");

        duzenleDersadi.value = hucreler[0].innerHTML;
        duzenleDersvize.value = hucreler[1].innerHTML;
        duzenleDersfinal.value = hucreler[2].innerHTML;
        duzenleDerssonuc.innerHTML = hucreler[3].innerHTML;

        var duzenleForm = document.getElementById("duzenleForm");
        duzenleForm.style.display = "block";

        var duzenleKaydet = document.getElementById("duzenleKaydet");
        duzenleKaydet.addEventListener("click", function (event) {
        duzenleFormDiv.style.display = "none";
        location.reload();

            var yeniDersadi = duzenleDersadi.value;
            var yeniDersvize = duzenleDersvize.value;
            var yeniDersfinal = duzenleDersfinal.value;
            var yeniDerssonuc = duzenleDerssonuc.innerHTML;

            hucreler[0].innerHTML = yeniDersadi;
            hucreler[1].innerHTML = yeniDersvize;
            hucreler[2].innerHTML = yeniDersfinal;
            hucreler[3].innerHTML = yeniDerssonuc;

            var index = satir.rowIndex - 1;
            veriler[index].veri1 = yeniDersadi;
            veriler[index].veri2 = yeniDersvize;
            veriler[index].veri3 = yeniDersfinal;
            veriler[index].veri4 = yeniDerssonuc;
            
                
    
            localStorage.setItem("veriler", JSON.stringify(veriler));

            duzenleFormDiv.style.display = "none";
        });
    });
    cell6.appendChild(duzenleButon);
    
    document.getElementById("dersadi").value = "";
    document.getElementById("dersvize").value = "";
    document.getElementById("dersfinal").value = "";
    document.getElementById("sonuc").innerHTML = "";

    var veri = {
        veri1: input1,
        veri2: input2,
        veri3: input3,
        veri4: input4
    };
    veriler.push(veri);
    localStorage.setItem("veriler", JSON.stringify(veriler));

    duzenleForm.style.display = "none";
}

window.onload = function () {
    var veri1 = localStorage.getItem('veri1');
    var veri2 = localStorage.getItem('veri2');
    document.getElementById('vize').value = veri1;
    document.getElementById('final').value = veri2;
    keyboardIsVisible = true;

    if (veriler.length > 0) {
        var tablo = document.getElementById("tabloGovdesi");

        veriler.forEach(function (veri) {
            var satir = tablo.insertRow();

            for (var i = 0; i < 4; i++) {
                var hucre = satir.insertCell(i);
                hucre.innerHTML = veri["veri" + (i + 1)];
            }

            var hucre5 = satir.insertCell(4);
            var silButon = document.createElement("i");
            silButon.className = "fas fa-trash";
            silButon.addEventListener("click", function () {
                var satir = this.parentNode.parentNode;
                tablo.deleteRow(satir.rowIndex - 1);
               

                var silinecekVeri = {
                    veri1: veri.veri1,
                    veri2: veri.veri2,
                    veri3: veri.veri3,
                    veri4: veri.veri4
                };
                veriler = veriler.filter(function (veri) {
                    return JSON.stringify(veri) !== JSON.stringify(silinecekVeri);
                });
                localStorage.setItem("veriler", JSON.stringify(veriler));
            });
            hucre5.appendChild(silButon);
            
            var cell6 = satir.insertCell(5);
            var duzenleButon = document.createElement("i");
            duzenleButon.className = "fas fa-edit";
            duzenleButon.addEventListener("click", function (event) {
                duzenleFormDiv.style.display = "block";
                event.preventDefault();

                var satir = this.parentNode.parentNode;
                var hucreler = satir.getElementsByTagName("td");
                var duzenleDersadi = document.getElementById("duzenleDersadi");
                var duzenleDersvize = document.getElementById("duzenleDersvize");
                var duzenleDersfinal = document.getElementById("duzenleDersfinal");
                var duzenleDerssonuc = document.getElementById("duzenSonuc");

                duzenleDersadi.value = hucreler[0].innerHTML;
                duzenleDersvize.value = hucreler[1].innerHTML;
                duzenleDersfinal.value = hucreler[2].innerHTML;
                duzenleDerssonuc.innerHTML = hucreler[3].innerHTML;


                var duzenleForm = document.getElementById("duzenleForm");
                duzenleForm.style.display = "block";

                var duzenleKaydet = document.getElementById("duzenleKaydet");
                duzenleKaydet.addEventListener("click", function (event) {
                    duzenleFormDiv.style.display = "none";
                    location.reload();
                    
                    var yeniDersadi = duzenleDersadi.value;
                    var yeniDersvize = duzenleDersvize.value;
                    var yeniDersfinal = duzenleDersfinal.value;
                    var yeniDerssonuc = duzenleDerssonuc.innerHTML;

                    hucreler[0].innerHTML = yeniDersadi;
                    hucreler[1].innerHTML = yeniDersvize;
                    hucreler[2].innerHTML = yeniDersfinal;
                    hucreler[3].innerHTML = yeniDerssonuc;

                    var index = satir.rowIndex - 1;
                    veriler[index].veri1 = yeniDersadi;
                    veriler[index].veri2 = yeniDersvize;
                    veriler[index].veri3 = yeniDersfinal;
                    veriler[index].veri4 = yeniDerssonuc;
                    
               
                    localStorage.setItem("veriler", JSON.stringify(veriler));

                });
            });
            cell6.appendChild(duzenleButon);
            
        });

    document.getElementById("dersadi").value = "";
    document.getElementById("dersvize").value = "";
    document.getElementById("dersfinal").value = "";
    document.getElementById("sonuc").innerHTML = "";
    
   }
 }

