function showProductCategoryView() {
   return /*HTML*/ `
   <div class="productCategoryPage">
      <div class="productCategory heading">
         Strikketøy 
      </div>
      <div class="productCategoryContainer">
         <div class="categoriesList mediumFont">
         <p>Kategorier<p>
         <ul>
            <li>Malerier</li>
            <li>Fotografier</li>
            <li>Strikketøy</li>
            <li>Figurer</li>
            <li>Noveller/Skriv</li>
            <li>Dreide boller</li>
            <li>Treverk</li>
            <li>Rosemaling</li>  
         </ul>
      </div>
         <div class="listingsImageRow">
            <button class="filtering smallFont">⏚ Filtrer</button>
            <p></p>
            <div class="sorting">
               <select class="smallFont" id="sorting" name="sorting">
                  <option>Pris lavest til høyest</option>
                  <option>Pris høyest til lavest</option>
               </select>
            </div>
            ${createSalesListings()}
         </div>
      </div>
   </div>
   `;

}


function createSalesListings() {
   let html = '';

   for (let listing of model.data.listings) {
      const url = model.data.listingImages.find(listingImage => listingImage.listingId === listing.id)?.url ?? './images/placeholder.png'; 
      const location = model.data.userContactInfos.find(user => user.userId === listing.userId).city;

      html += `
         <div onclick="setPage('productPageCustomer')"class="categoryPictures">
            <img src="${url}"/>
            <div class="listingInfos">
               <p class="mediumFont">${listing.title}</p>
               <p class="smallFont">${listing.price},-</p>
               <p class="smallFont">📍 ${location}</p>
            </div>
         </div>`;
      }
   return html
   }


