function showProductPageCustomerView() {
   return /*HTML*/ `
      <div class="productPageContainer">
      <div class="category">
         <div class="infoHeader">
            <div class="productInfoContainer top">
               <div>
               </div>
               <p class="largeFont">Mona Lisa</p>
               <p class="mediumFont">Maleri av en vakker dame</p>
            </div>
            <div class="userInfo top mediumFont">
               <p class="link">Leonardo da Vinci ✓</p>
               <p>📍 Bergen</p>
            </div>
         </div>
         <div class="imageContainer productPage">
            <div class="bigImage productPage">
               <img src="./images/monalisa.jpg">
            </div>
            <div class="smallImages productPage">
               <img src="./images/monalisa.jpg">
               <img src="./images/monalisa.jpg">
               <img src="./images/monalisa.jpg">
            </div>
            <div class="history">
               <div class="largeFont">Historie</div>
               <div class="mediumFont">Historie her</div>
            </div>
         </div>

         <div class="productInfoContainer bottom">
         <p class="largeFont underline">Informasjon</p>
            <div class="productInfo bottom">
               <p class="mediumFont"><b>Tilstand:</b> Godt brukt</p>
               <p class="mediumFont"><b>Mål:</b> 21 x 30 cm</p>
               <p class="LargeFont">Pris: 2599,-</p>
               <p class="mediumFont"><b>Kan hentes:</b> Ja</p>
               <p class="mediumFont"><b>Kan sendes:</b> Ja</p>
               <button class="medium font">Kontakt selger</button>
               </div>
            </div>
            </div>
         </div>
      </div>
   `;
}