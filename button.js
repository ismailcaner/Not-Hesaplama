function temizle() {
//not ve sonuç kısımlarını temizleme işlemi
  document.getElementById('sonuc').innerHTML = '';
  document.getElementById('dersvize').value = '';
  document.getElementById('dersfinal').value = '';
}
//karanlık-aydınlık mod
function darkligth() {
      const body = document.body;
      body.classList.toggle('dark-mode');

      const darkModeButton = document.getElementById('dark-mode-button');
      if (body.classList.contains('dark-mode')) {
        darkmod.textContent = 'Light Mode';
      } else {
        darkmod.textContent = 'Dark Mode';
      }
    }
