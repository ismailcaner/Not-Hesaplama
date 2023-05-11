//clear butonu
function clearElements() {
  var elements = document.getElementsByClassName("sonuc");
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
  var elements = document.getElementsByClassName("input");
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";
    elements[i].innerHTML = "";
  }
}

//ders ekleme butonu
var cloneCounter = 1;

function add() {
    var divContainer = document.getElementById('lesson');
    var klon = divContainer.cloneNode(true);

    klon.setAttribute('id', 'lesson' + cloneCounter);

    var orijinalOgeler = divContainer.getElementsByTagName('*');
    var klonOgeler = klon.getElementsByTagName('*');

    for (var i = 0; i < orijinalOgeler.length; i++) {
        var orijinalOge = orijinalOgeler[i];
        var klonOge = klonOgeler[i];
        klonOge.setAttribute('id', klonOge.getAttribute('id') + '-' + cloneCounter);
    }

    document.getElementById('lessonarea').appendChild(klon);

    cloneCounter++;
}
