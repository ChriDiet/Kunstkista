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
      { categoryId: 1, url: './images/maleri.jpg'},
      { categoryId: 2, url: './images/strikketoy.jpg'},
      { categoryId: 3, url: './images/figurer.jpg'},
      { categoryId: 4, url: './images/trearbeid.jpg'},
      { categoryId: 5, url: './images/fotografi.jpg'},
      { categoryId: 6, url: './images/dreidbolle.jpg'},
      { categoryId: 7, url: './images/rosemaling.jpg'},
      { categoryId: 8, url: './images/skrifter.jpg'},
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