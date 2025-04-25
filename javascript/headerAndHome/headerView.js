function createHeader() {
   let loggInHtml = 'Logg inn';
   const user = model.data.users.find(users => users.id == model.app.isLoggedIn);
   let selectedOption = '';

   if(user){
      loggInHtml = `
         <div class="logIn">
            <img src="./images/profilePicPlaceHolder.png"/>
            <select onchange="setPage(this.value)" name ="userOptions" id="userOptions" class="profilSelect">
               <option disabled selected>${user.firstName} ${user.lastName}</option>
               <option value="profile">Min profil</option>
               <option value="newSale">Legg til nytt kunstverk</option>
               <option value="myauctions">Mine auksjoner</option>
               <option value="logOut">Logg ut</option>
            </select>
         </div>`;
   } else {
      loggInHtml = `
         <div onclick="setPage('logIn')" class="logIn">
            <img src="./images/profilePicPlaceHolder.png"/>
            <p>Logg Inn<p>
         </div>`;
   }
   
   return /*HTML*/ `
   <div class="header">
      <div onclick="setPage('home')" class="logo"><img src="./images/kunstkistalogo.svg"></div>
   <div class="menuButtons">
      <button onclick="setPage('home')"> <img class="homeButton" src="./images/home.png">Hjem</button>
      
      <button onclick="setPage('auctions')">Auksjon</button>
      <button onclick="setPage('categories')">Kategorier</button>
   </div>
   <div class="searchbar">
      <input type="search" id="searchbar" placeholder="Hva ser du etter?">
      <button> Søk </button>
   </div>
      ${loggInHtml}
 
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