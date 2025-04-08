function showProductCategoryView() {
   return /*HTML*/ `
   <div class="productCategoryPage">
         <div class="productCategory heading">
            Strikketøy 
         </div>
      <div class="productCategoryContainer">
         <div class="containerHeader"> </div>
         <div class="categoriesList"></div>
         <div class="productRow 1">${createSalesListings()}</div>
         <div class="productRow 2"></div>
      </div>
   </div>
   `;

}


function createSalesListings() {
   let html = '';
   let listings = model.data.listings;
   let imgUrl = '';
   let newListings = 8;
   let city = '';

   for (let i = 0; i < newListings; i ++) {
      if (model.data.listingImages[i].listingsId == listings.id) {
         imgUrl = model.data.listingImages[i].url;
      }

   for (let i = 0; i < 8; i ++) {
      if (model.data.userContactInfos.userId == model.data.listings[i].userId) {
         city = model.data.userContactInfos[i].city;
      }

      html += `
         <div onclick="setPage('productPageCustomer')"class="artContainer-homeView">
            <img src="${imgUrl}"/>
            <div>
               <p class="mediumFont">${listings[i].title}</p>
               <p class="smallFont">${listings[i].price},-</p>
               <p class="smallFont">${city}</p>
            </div>
         </div>`
   }
   }

   return html
}