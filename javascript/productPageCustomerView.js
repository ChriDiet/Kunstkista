function showProductPageCustomerView() {
   return /*HTML*/ `
      <div class="productPageContainer">

         <div class="infoHeader">
            <div class="productInfoContainer top">
               <div>
                  <button>⬅</button>
                  <p class="smallFont">Kategori: <u>Maleri</u></p>
               </div>
               <p class="largeFont">Mona Lisa</p>
               <p class="mediumFont">Maleri av en vakker dame</p>
            </div>
            <div class="userInfo top mediumFont">
               <p class="link">Leonardo da Vinci ✓</p>
               <p>★ 3.5 av 5</p>
               <p>📍 Bergen</p>
            </div>
         </div>

         <div class="imageContainer productPage">
            <div class="bigImage productPage">
               <img src="./images/monalisa.jpg">
            </div>
            <div class="smallImages productPage">
               <img class="small" src="./images/monalisa.jpg">
               <img src="./images/monalisa.jpg">
               <img src="./images/monalisa.jpg">
            </div>
         </div>

         <div class="productInfoContainer bottom">
            <div class="productInfo bottom">
               <h3 class="largeFont">Informasjon</h3>
               <h3 class="largeFont">Historie</h3>
               <p class="mediumFont">Tilstand: Godt brukt</p>
               <p class="mediumFont">Mål: 21 x 30 cm</p>
               <p class="mediumFont">Kan hentes: Ja</p>
               <p class="mediumFont">Kan sendes: Ja</p>
            </div>
            <div class="priceAndContact">
               <p class="largeFont">Pris: 2599,-</p>
               <button class="medium font">Kontakt selger</button>
            </div>
         </div>
      </div>
   `;
}