function createHeader() {
   return /*HTML*/ `
   <div class="header">
      <div class="logo">Kunstkista</div>
   <div class="menuButtons">
      <button onclick="setPage('home')">
         <img class="homeButton" src="./images/home.png"/>
      </button>
      <button>Auksjon</button>
      <button>Kategorier</button>
   </div>
   <div class="searchbar">
      <input type="search" id="searchbar" placeholder="Hva ser du etter?">
      <button> Søk </button>
   </div>
   <div onclick="setPage('logIn')" class="logIn">
      <img src="./images/profilePicPlaceholder.png"/>
      <p>Logg inn<p>
   </div>
</div>
   `;
}