function showProductPageCustomerView() {
   return /*HTML*/ `
      <div class="productPageContainer">
         
         <div class="infoHeader">
            <button><-</button>
            <div class="productInfoContainer top">
               <p>Kategori: Maleri</p>
               <p>Mona Lisa</p>
               <p>Maleri av en vakker dame</p>
            </div>
            <div class="userInfo top">
               <p>Leonardo da Vinci &#10003</p>
               <p>&#9733 3.5 av 5</p>
               <p>&#128205 Bergen</p>
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
         </div>

         <div class="productInfoContainer bottom">
            <div class="productInfo bottom">
               <h3>Informasjon</h3>
               <p>Tilstand: Godt brukt</p>
               <p>Mål: 21 x 30 cm</p>
               <p>Kan hentes: Ja</p>
               <p>Kan sendes: Ja</p>
            </div>
            <div class="priceAndContact">
               <p>Pris: 2599,-</p>
               <button>Kontakt selger</button>
            </div>
         </div>
      </div>
   `;
}