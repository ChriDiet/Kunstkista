function showProductPageCustomerView() {

   return /*HTML*/ `
      <div class="productPageContainer">
      <div class="category">
         <div class="infoHeader">
            <div class="productInfoContainer top">
               <div>
               </div>
               ${getListingInformation()}
               </div>
            </div>
            </div>
         </div>
      </div>
   `;
}

function getListingInformation() {
   let productListingId = model.app.selectedListingId;
   let username;
   let imgUrl;
   let location;
   let condition;
   
      for (let listing of model.data.listings) {
         if (listing.salesFormId == 1 && listing.id == productListingId) {
         imgUrl = model.data.listingImages.find(x => x.listingId === listing.id)?.url ?? './images/placeholder.png'; 
         location = model.data.userContactInfos.find(x => x.userId === listing.userId).city;
         username = model.data.users.find(x => x.id === listing.userId).userName;
         condition = model.data.productCondition.find(x => x.id === listing.conditionId).condition;
      return /*HTML*/`
      <p class="largeFont">${listing.title}</p>
               <p class="mediumFont">${listing.description}</p>
            </div>
            <div class="userInfo top mediumFont">
               <p class="link">${username}✓ </p>
               <p>📍${location}</p>
            </div>
         </div>
         <div class="imageContainer productPage">
            <div class="bigImage productPage">
               <img src="${imgUrl}">
            </div>
            <div class="smallImages productPage">
               <img src="${imgUrl}">
               <img src="${imgUrl}">
               <img src="${imgUrl}">
            </div>
            <div class="history">
               <div class="largeFont">Historie</div>
               <div class="mediumFont">${listing.story}</div>
            </div>
         </div>

         <div class="productInfoContainer bottom">
         <p class="largeFont underline">Informasjon</p>
            <div class="productInfo bottom">
               <p class="mediumFont"><b>Tilstand:</b> ${condition}</p>
               <p class="mediumFont"><b>Mål:</b> ${listing.measurements} cm</p>
               <p class="largeFont">Pris: ${listing.price},-</p>
               <p class="mediumFont"><b>Kan hentes:</b> ${listing.pickup ? 'Ja' : 'Nei'}</p>
               <p class="mediumFont"><b>Kan sendes:</b> ${listing.send ? 'Ja' : 'Nei'}</p>
               <button class="medium font">Kontakt selger</button>`;
      }
   }
}