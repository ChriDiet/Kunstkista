function showNewSaleView() {
return /*HTML*/ `
<div class="newSalePage">
   <div class="newSaleHeader"> 
      Legg til nytt kunstverk
   </div>
   <div class="newSaleContainer">

      <div class="newImagesContainer">
         <img class="imageBig" src="./images/rosemaling.png">
         <div class="imagesSmall">
            <img src="./images/rosemaling.png">
            <img src="./images/placeholder.png">
            <img src="./images/placeholder.png">
         </div>
         <button class="addPictures">+ Legg til bilder</button>
      </div>
      <div class ="newSaleForm">
         <form>
            ${createSelectSalesFormHtml()}
            ${createSelectCategoriesHtml()}

            <label for="productName"> Navn på kunstverk</label>
            <input type="text" id="productName" name="productName">
            <label for="price">Pris</label>
            <input type="number" id="productPrice" name="productPrice">
            
            ${createSelectConditionHtml()}
            
            <label for="measurements">Mål i cm</label>
            <input type="text" id="measurements" name="measurements" placeholder="Eksempel: 21 x 30 x 20">
         </form>
      </div>
      <div class="productDescription">
         <div class="mediumFont"> Kort beskrivelse av kunstverket</div>
         <textarea name="description" rows="5" cols="45"></textarea>
         <div class="checkBoxes">
         <label class="mediumFont" for="ship">Kan sendes</label>
         <input type="checkbox" id="ship" name="ship">
         <label class="mediumFont" for ="pickUp">Kan hentes</label>
         <input type="checkbox" id="pickUp" name="pickUp">
         </div>
      </div>
      <div class="productHistory">
         <div class="mediumFont"> Historien til kunstverket</div>
         <textarea name="history" rows="15" cols="65"></textarea>
         <input type="button" id="sendInn" name="sendInn" value="Send inn for godkjenning">
         </div>
   </div>
</div>
`;
}

function createSelectCategoriesHtml() {
   let html = '';
   for (let category of model.data.categories) {
      html+= `<option> ${category.name}</option>`;
   }
   return `<label for="categories">Kategori</label>
   <select id="categories" name="categories">
      ${html}
   </select>`
}  

function createSelectSalesFormHtml() {
   let html = '';
   for (let option of model.data.salesForm) {
      html+= `<option> ${option.type}</option>`;
   }
   return `
      <label for="salesform">Velg salgsform</label>
      <select id="salesform" name="salesform">
         ${html}
      </select>`
}

function createSelectConditionHtml() {
   let html = '';
   for (let condition of model.data.productCondition) {
      html+= `<option> ${condition.condition}</option>`;
   }
   return `
   <label for="condition">Tilstand</label>
            <select id="condition" name="condition">
               ${html}
            </select>`
}