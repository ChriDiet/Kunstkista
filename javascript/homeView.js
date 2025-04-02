function showHomeView() {
   return /*HTML*/ `
   <div class="auctionHeader">
      <p class="auctionCounting">Auksjon avsluttes: 1 dag 10 timer 2 minutter</p>
      <p class="auctionSubtitle">Produkter til auksjon denne uken</p>
      <div class="auctionImgContainer">
         <div>
            <div> < </div>
            <img src="./images/placeholder.png"/>
            <div>></div>
         </div>
         <div class="info">
            <p>Produktnavn</p>
            <p>Startpris: 200kr</p>
         </div>
      </div>
   </div>
   <h2>Nye kunstverk</h2>
   <div class="newArtContainer">
      <div class="newArt">
         ${createNewArtContainer()}
      </div>
   </div>

   `;
}

function createNewArtContainer() {
   let html = '';
   let listings = model.data.listings;
   let imgUrl = '';

   for (let i = 0; i < listings.length; i ++) {
      if (model.data.listingImages[i].listingsId == listings.id) {
         imgUrl = model.data.listingImages[i].url;
      }

      html += `
         <div class="artContainer">
            <img src="${imgUrl}"/>
            <p>${listings[i].title}</p>
            <p>${listings[i].price},-</p>
         </div>`
   }
   return html;
}

// function getImageUrl() {

// }