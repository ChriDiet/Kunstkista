function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/`
   ${createHeader()}
   ${showauctions()}`;
}