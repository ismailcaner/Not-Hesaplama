function temizle() {
//not ve sonuç kısımlarını temizleme işlemi
  clear.style.opacity = 0.5;
  document.getElementById('sonuc').innerHTML = '';
  document.getElementById('dersvize').value = '';
  document.getElementById('dersfinal').value = '';
}


function hesapla() {
//girilen değer yok ise sonuç ekranını tamamen temizleme işlemi
    var input1 = document.getElementById('dersvize');
    var input2 = document.getElementById('dersfinal');
    var sonuc = document.getElementById('sonuc');
  
    var vize = document.getElementById("dersvize").value;
    var final = document.getElementById("dersfinal").value;
    var yuzdevize = document.getElementById("vize").value;
    var yuzdefinal = document.getElementById("final").value;
    var yuzde1 = (vize * yuzdevize) / 100;
    var yuzde2 = (final * yuzdefinal) /100;
    var sonuc = yuzde1 + yuzde2;
    var sonuc = sonuc.toFixed(1);
    document.getElementById("sonuc").innerHTML = sonuc;
    
    if( sonuc < 60 ){
      sonuc.style.border = 5px solid red;}
}