function showHomeView() {
   return /*HTML*/ `
   <div class="homepage">
      <div class="auctionHeader">
         <p class="auctionCounting">Auksjon avsluttes om: 1 dag 10 timer 2 minutter</p>
         <p class="auctionSubtitle">Produkter til auksjon denne uken:</p>
         <div class="auctionImgContainer">
            <div>
               <button> ❮ </button>
               <img src="./images/mariusgenser.jpg"/>
               <button> ❯ </button>
            </div>
         </div>
      </div>

      <div class="newSales">
         <h2>Nye kunstverk</h2>
         <div class="newArtContainer">
            <div class="newArt">
               ${createNewArtContainer()}
            </div>
         </div>
      </div>

   `;
}

function createNewArtContainer() {
   let html = '';
   let listings = model.data.listings;
   let imgUrl = '';
   let newListings = 6;

   for (let i = 0; i < newListings; i ++) {
      if (model.data.listingImages[i].listingsId == listings.id) {
         imgUrl = model.data.listingImages[i].url;
      }

      html += `
         <div onclick="setPage('productPageCustomer')"class="artContainer-homeView">
            <img src="${imgUrl}"/>
            <div>
               <p class="mediumFont">${listings[i].title}</p>
               <p class="smallFont">${listings[i].price},-</p>
            </div>
         </div>`
   }
   return html;
}
// //Ikke ferdig//
// function createAuctionSliderHtml() {
//    let html = '';
//    let auctions = model.data.auctions
//    let listingImages = model.data.listingImages;
//    let listings = model.data.listings;
//    let imgUrl = '';
//    let slidesQty = auctions.length;
//    let title = '';
//    let price = '';
//    let sliderImages = [];
   

//    for (let i = 0; i < slidesQty; i ++) {
//       if (listingImages[i].listingsId == auctions.listingId) {
//          imgUrl = listingImages[i].url;
//          title = listings[i].title;
//          price = listings[i].price; 
//          sliderImages.push({imgUrl, title,price})
//       }
//    }
//    console.log(sliderImages);
// }

// function getImageUrl() {

// }

// function createAuctionSlider() {

   
// }