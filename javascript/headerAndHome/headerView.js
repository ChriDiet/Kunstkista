function createHeader() {
   return /*HTML*/ `
   <div class="header">
      <div class="logo"><img src="./images/kunstkistalogo.svg"></div>
   <div class="menuButtons">
      <button onclick="setPage('home')"> <img class="homeButton" src="./images/home.png">Hjem</button>
      
      <button onclick="setPage('auctions')">Auksjon</button>
      <button onclick="setPage('categories')">Kategorier</button>
   </div>
   <div class="searchbar">
      <input type="search" id="searchbar" placeholder="Hva ser du etter?">
      <button> Søk </button>
   </div>
   <div onclick="setPage('logIn')" class="logIn">
      <img src="./images/profilePicPlaceHolder.png"/>
      <p>Logg inn<p>
   </div>
</div>
${isHome() ? '' : '<button class="backButton" onclick="goToPreviousPage()">⬅ Gå tilbake</button>'}
   `;
}

function isHome() {
   if (model.app.currentPage == 'home') 
      return true;
   if (!model.app.currentPage == 'home')
      return false;
}