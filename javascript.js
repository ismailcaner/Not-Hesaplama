const dizi = ["vize", "final", "dersvize", "dersfinal", "duzenleDersvize", "duzenleDersfinal"];

function sifirYuz() {
    dizi.forEach(function (elementID) {
        var input = document.getElementById(elementID);
             if (input) {
                var value = input.value.trim();
                if (value !== "") {
                    if (parseInt(value) < 1) {
                        input.value = "";
                    } else if (parseInt(value) > 100) {
                        input.value = value.slice(0, -1);
                    }
                }
            }
        });
    }

function islemler() {
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
    document.getElementById("sonuc").style.color = sonuc < 60 ? 'red' : 'black';

    } else {
        sonuc.textContent = "";
    } 
}

function cache(){
    var deger1 = document.getElementById('vize').value;
    var deger2 = document.getElementById('final').value;
    localStorage.setItem('veri1', deger1);
    localStorage.setItem('veri2', deger2);
    keyboardIsVisible = true;
}


//------------üst kısaltma fonksiyonlar------------//
function kaydet() {
     sifirYuz()
     islemler()
     cache()
}

function hesapla() {
    var input = document.getElementById("dersvize");
    var input1 = document.getElementById("dersfinal");
        var value = input.value.trim();
        var value1 = input1.value.trim();
        if ( value !=="" || value1 !=="") {
            openpop.style.opacity = 1;}
            else if ( value === "" || value1 === ""){
                openpop.style.opacity =0.2;
            }

    sifirYuz()
    islemler()
    }

function duzenleHesap() {
        sifirYuz()
        islemler()
        }
    
function dersadi() {
    const deger1 = document.getElementById("dersadi").value;
    if (deger1 !==""){
        saved.style.opacity=1;
    }
    else{
        saved.style.opacity=0.5;
    }
}
//ekrandaki öğlerin hareketini kapatma işlemi
function preventScroll(event) 
{event.preventDefault();}
document.addEventListener('touchmove', preventScroll, { passive: false });

function moveCursorToEnd(inputElement) {
    var length = inputElement.value.length;
    inputElement.setSelectionRange(length, length);
}
