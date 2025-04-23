function showProductCategoryView() {
   let categoryName = model.data.categories.find(category => category.id == model.app.selectedCategory).name
   return /*HTML*/ `
   <div class="categoriesPage">
      <div class="categories heading">
         ${categoryName} 
      </div>
      <div class="categoriesContainer">
         <div class="categoriesList mediumFont">
         <p>Kategorier<p>
         <ul>
            ${createCategoriesList()}
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

function createCategoriesList() {
   let html = '';
   for (let category of model.data.categories) {
      html+= `<li class="categoryList link" onclick="setProductCategoryPage(${category.id})">${category.name}</li>`;
   }
   return html;
}  


function createSalesListings() {
   let html = '';
   let maxListings = 0;

   for (let listing of model.data.listings) {

      if(listing.categoryId == model.app.selectedCategory && maxListings != 12) {
      const url = model.data.listingImages.find(listingImage => listingImage.listingId === listing.id)?.url ?? './images/placeholder.png'; 
      const location = model.data.userContactInfos.find(user => user.userId === listing.userId).city;
      maxListings++

      html += `
         <div onclick="setProductPage(${listing.id})"class="categoryPictures">
            <img src="${url}"/>
            <div class="listingInfos">
               <p class="mediumFont categoryList">${listing.title}</p>
               <p class="smallFont">${listing.price},-</p>
               <p class="smallFont">📍 ${location}</p>
            </div>
         </div>`;
      }
   }
   return html;
}