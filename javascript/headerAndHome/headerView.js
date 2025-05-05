function createHeader() {
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
      ${getProfileHtml()}
 
</div>
${isHome() ? '' : '<button class="backButton" onclick="goToPreviousPage()">⬅ Gå tilbake</button>'}
   `;
}

function getProfileHtml() {
   let html = '';
   const loggedInUser = model.data.users.find(users => users.id == model.app.isLoggedIn);
   const isAdmin = model.data.users.find(user => user.isAdmin == true).id;

   if (loggedInUser && isAdmin !== loggedInUser.id) {
      html = `
         <div class="logIn">
            <img src="./images/profilePicPlaceHolder.png"/>
            <select onchange="setPage(this.value)" name ="userOptions" id="userOptions" class="profilSelect">
               <option disabled selected>${loggedInUser.firstName} ${loggedInUser.lastName}</option>
               <option value="profile">Min profil</option>
               <option value="newSale">Legg til nytt kunstverk</option>
               <option value="myauctions">Mine auksjoner</option>
               <option value="logOut">Logg ut</option>
            </select>
         </div>`;
   } else if (loggedInUser && isAdmin == loggedInUser.id) {
      html = `
         <div class="logIn">
            <img src="./images/adminPLaceholder.png"/>
            <select onchange="setPage(this.value)" name ="userOptions" id="userOptions" class="profilSelect">
               <option disabled selected>${loggedInUser.firstName} ${loggedInUser.lastName}</option>
               <option value="adminApprovalPage">Godkjenninger</option>
               <option value="logOut">Logg ut</option>
            </select>
         </div>`;

   } else if (!loggedInUser) {
      html = `
            <div onclick="setPage('logIn')" class="logIn">
               <img src="./images/profilePicPlaceHolder.png"/>
               <p>Logg Inn<p>
            </div>`;
   }
   return html
}
