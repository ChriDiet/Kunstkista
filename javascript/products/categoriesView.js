function showCategoriesView() {
   return /*HTML*/ `
      <div class="categoryContainer">
         <div class="largeFont">Kategorier</div>
   <div class="categoryGrid">
      ${createCategoriesCard()}
   </div>
   `;
}



function createCategoriesCard() {
   let categoryImages = [ 
      { categoryId: 1, url: './images/maleri.png'},
      { categoryId: 2, url: './images/strikketoy.png'},
      { categoryId: 3, url: './images/figurer.png'},
      { categoryId: 4, url: './images/trearbeid.png'},
      { categoryId: 5, url: './images/fotografi.png'},
      { categoryId: 6, url: './images/dreidbolle.png'},
      { categoryId: 7, url: './images/rosemaling.png'},
      { categoryId: 8, url: './images/skrifter.png'},
   ]
   let html = '';
   for (let category of model.data.categories) {
      imgUrl = categoryImages.find(categoryImage => categoryImage.categoryId === category.id)?.url ?? './images/placeholder.png';
      html += `
         <div onclick="setProductCategoryPage(${category.id})" class="categoryCard">
            <div class="categoryName largeFont">${category.name}</div>          
            <img src="${imgUrl}">
         </div>
         `
   }
   return html;
}