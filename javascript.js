 //not kat sayısı kaydetme ve hesaplama işlemi
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
            var input1 = document.getElementById('vize');
            var input2 = document.getElementById('final');
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
//girilen değerleri önbelleğe kaydetme işlemi
            var deger1 = document.getElementById('vize').value;
            var deger2 = document.getElementById('final').value;
            localStorage.setItem('veri1', deger1);
            localStorage.setItem('veri2', deger2);
            keyboardIsVisible = true;
}

//vize final notu hesaplama işlemi
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
        
        sonuc.style.color = result < 60 ? 'red' : 'black';
        clear.style.opacity = 1;

        
    
        } else {
            clear.style.opacity= 0.5;
            sonuc.textContent = "";
        }
    }


    function duzenleHesap() {

        var input = document.getElementById("duzenleDersvize");
        var input1 = document.getElementById("duzenleDersfinal");
            var value = input.value.trim();
            var value1 = input1.value.trim();
    
         
          // yalnızca 1 ile 100 arası değer girişine izin verme işlemi
            var input = document.getElementById("duzenleDersvize");
            var value = input.value.trim();
            
            if (value !== "") {
                if (parseInt(value) < 1) {
                    input.value = "";
                } else if (parseInt(value) > 100) {
                    input.value = value.slice(0, -1);
                }
        }
          
            var input = document.getElementById("duzenleDersfinal");
            var value = input.value.trim();
            
            if (value !== "") {
                if (parseInt(value) < 1) {
                    input.value = "";
                } else if (parseInt(value) > 100) {
                    input.value = value.slice(0, -1);
                }
        }
        //girilen değer yok ise sonuç ekranını tamamen temizleme işlemi
            var input1 = document.getElementById('duzenleDersvize');
            var input2 = document.getElementById('duzenleDersfinal');
            var sonuc = document.getElementById('duzenSonuc');
          
            if (input1.value || input2.value) {
            var vize = document.getElementById("duzenleDersvize").value;
            var final = document.getElementById("duzenleDersfinal").value;
            var yuzdevize = document.getElementById("vize").value;
            var yuzdefinal = document.getElementById("final").value;
            var yuzde1 = (vize * yuzdevize) / 100;
            var yuzde2 = (final * yuzdefinal) /100;
            var sonuc = yuzde1 + yuzde2;
            var sonuc = sonuc.toFixed(1);
            document.getElementById("duzenSonuc").innerHTML = sonuc;
        
            } else {
                duzenSonuc.textContent = "";
            }
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
