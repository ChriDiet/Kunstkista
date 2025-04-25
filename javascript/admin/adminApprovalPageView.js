function showAdminApprovalPageView() {
   return /*HTML*/ `
   <div class="admin heading">Administrasjon</div>
      <div class="adminApprovalPage">
         <div class="approvalContainer approveListings">
            <div class="largeFont adminApproveHeading">Salgsannonser til godkjenning</div>
            <table class="adminTable">
               <tr>
                  <th>Tittel</th>
                  <th>Selger</th>
                  <th>Kategori</th>
               </tr>
               ${getListingsForApproval()}
            </table>
            <button class="showMore">Vis mer</button>
         </div>
         <div class="approvalContainer approveAuctions">
         <div class="largeFont adminApproveHeading">Auksjoner til godkjenning</div>
            <table class="adminTable">
               <tr>
                  <th>Tittel</th>
                  <th>Selger</th>
                  <th>Kategori</th>
               </tr>
               ${getAuctionsForApproval()}
            </table>
            <button class="showMore">Vis mer</button>
         </div>
         <div class="approvalContainer approveUsers">
         <div class="largeFont adminApproveHeading">Verifiser brukerprofiler</div>
            <table class="adminTable">
               <tr>
                  <th>Navn</th>
                  <th>Brukernavn</th>
                  <th>Rating</th>
               </tr>
               ${getUsersForApproval()}
            </table>
            <button class="showMore">Vis mer</button>
         </div>
         <div class="approvalContainer approvedAuctions">
         <div class="largeFont adminApproveHeading">Godkjente auksjoner</div>
            <table class="adminTable">
               <tr>
                  <th>Tittel</th>
                  <th>Selger</th>
                  <th>Kategori</th>
                  <th>Go live</th>
               </tr>
               ${getApprovedAuctions()}
            </table>
            <button class="showMore">Vis mer</button>
         </div>
      </div>
   `;
}

function getListingsForApproval() {
   let html = '';
   let listingsCount = 0;
   let maxListings = 5;

   for (let listing of model.data.listings) {
      if (listing.waitingForApproval && listing.salesFormId == 1 && listingsCount < maxListings) {
         listingsCount++
         html += `
            <tr>
               <td class="hoverLink" onclick="setAdminApprovalPage(${listing.id})"#>${listing.title}</td>
               <td>${model.data.users.find(user => user.id== listing.userId).userName}</td>
               <td class="hoverLink" onclick="setProductCategoryPage(${listing.categoryId})">${model.data.categories.find(category => category.id == listing.categoryId).name}</td>
            </tr>
         `;
      }
   }
   return (html);
}

function getAuctionsForApproval() {
   let html = '';
   let listingsCount = 0;
   let maxListings = 5;

   for (let listing of model.data.listings) {
      if (listing.waitingForApproval && listing.salesFormId == 2 && listingsCount < maxListings) {
         listingsCount++
         html += `
            <tr>
               <td class="hoverLink" onclick="setAdminApprovalPage(${listing.id})"#>${listing.title}</td>
               <td>${model.data.users.find(user => user.id== listing.userId).userName}</td>
               <td>${model.data.categories.find(category => category.id == listing.categoryId).name}</td>
            </tr>
         `;
      }
   }
   return (html);
}

function getUsersForApproval() {
   let html = '';
   let usersCount = 0;
   let maxUsersCount = 5;

   for (let user of model.data.users) {
      if (user.verified && usersCount < maxUsersCount) {
         usersCount++
         html += `
            <tr>
               <td>${user.firstName} ${user.lastName}</td>
               <td>${user.userName}</td>
               <td>${user.rating}</td>
            </tr>
         `;
      }
   }
   return html;
}

function getApprovedAuctions() {
   let html = '';
   let listings = 0;
   let maxListings = 5;

   for (let listing of model.data.listings) {
      if (model.data.auctions.find(listingId => listing.id == listing.id) && listings < maxListings) {
         listings++
         html += `
            <tr>
               <td>${listing.title}</td>
               <td>${listing.price},-</td>
               <td>${model.data.categories.find(category => category.id == listing.categoryId).name}</td>
               <td>
                  <label class="switch">
                  <input type="checkbox">
                  </label>
               </td>
            </tr>
         `;
      }
   }
   return html;
}