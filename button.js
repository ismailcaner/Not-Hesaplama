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
