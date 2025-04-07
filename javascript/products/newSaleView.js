function showNewSaleView() {
return /*HTML*/ `
<div class="newSalePage">
   <div class="newSaleHeader"> 
      Ny annonse
   </div>
   <div class="newSaleContainer">

      <div class="newImagesContainer">
         <img class="imageBig" src="./images/placeholder.png">
         <div class="imagesSmall">
            <img src="./images/placeholder.png">
            <img src="./images/placeholder.png">
            <img src="./images/placeholder.png">
         </div>
         <button class="addPictures">+ Legg til bilder</button>
      </div>
      
      <div class ="newSaleForm">
         <form>
            <label for="salesform">Velg salgsform</label>
            <select id="salesform" name="salesform">
               <option>Vanlig salg</option>
               <option>Auksjon</option>
            </select>

            <label for="categories">Kategori</label>
            <select id="categories" name="categories">
               <option>Malerier</option>
               <option>Fotografier</option>
               <option>Strikketøy</option>
               <option>Figurer</option>
               <option>Noveller/Skriv</option>
               <option>Dreide boller</option>
               <option>Treverk</option>
               <option>Rosemaling</option>
            </select>
            <label for="productName"> Navn på kunstverk</label>
            <input type="text" id="productName" name="productName">
            <label for="price">Pris</label>
            <input type="number" id="productPrice" name="productPrice">
            <label for="condition">Tilstand</label>
            <select id="condition" name="condition">
               <option>Som ny</option>
               <option>Pent brukt</option>
               <option>Godt brukt</option>
               <option>Slitt</option>
            </select>
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