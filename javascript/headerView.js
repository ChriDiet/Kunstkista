function createHeader() {
   return /*HTML*/ `
   <div class="header">
      <div class="logo">Kunstkista</div>
   <div class="menuButtons">
      <button onclick="showHomeView()">
         <img class="homeButton" src="./images/home.png"/>
      </button>
      <button>Auksjon</button>
      <button>Kategorier</button>
   </div>
   <div class="searchbar">
      <input type="search" id="searchbar" placeholder="Hva ser du etter?">
   </div>
   <div class="logIn">
      <img src="./images/profilePicPlaceholder.png"/>
      Logg inn
   </div>
</div>
   `;
}