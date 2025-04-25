let sliderUrl = '';
let slideIndex = 0;


function showHomeView() {
   return /*HTML*/ `
   <div class="homepage">
      <div class="auctionHeader">
         <p class="auctionCounting">Auksjon avsluttes om: 1 dag 10 timer 2 minutter</p>
         <p class="auctionSubtitle">Produkter til auksjon denne uken:</p>
         <div class="auctionImgContainer">
            <div>
               <button onclick="changeSliderImage('increase')"> &#10094; </button>
               <img src="${sliderUrl ? sliderUrl : model.data.listingImages.find(x => x.listingId === model.data.auctions[0].listingId).url}"/>
               <button onclick="changeSliderImage('decrease')"> &#10095; </button>
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
   let imgUrl = '';
   let listings = model.data.listings;
   let listingsQty = 0;
      let maxListings = 8;

   for (let listing of listings) {
      if (listingsQty == maxListings) return html;
      
      listingsQty++
      imgUrl = model.data.listingImages.find(listingImage => listingImage.listingId === listing.id)?.url ?? './images/placeholder.png'; 
      
      html += `
      <div onclick="setProductPage(${listing.id})"class="artContainer-homeView">
         <img src="${imgUrl}"/>
         <div>
            <p class="mediumFont">${listing.title}</p>
            <p class="smallFont">${listing.price},-</p>
         </div>
      </div>`
   }
   return html;
}


   function changeSliderImage(action) {
      let urls = model.data.listingImages.map(listingUrl => listingUrl.url)
      let minIndex = 0;
      let maxIndex = urls.length - 1;

   if (action == 'increase' && slideIndex < maxIndex) {
      slideIndex ++;
      sliderUrl = urls[slideIndex];
   }
   if (action == 'decrease' && slideIndex > minIndex) {
      slideIndex --;
      sliderUrl = urls[slideIndex];
   } else if (action == 'increase' && slideIndex == maxIndex) {
      slideIndex = minIndex;
      sliderUrl = urls[slideIndex];
   } else if (action == 'decrease' && slideIndex == minIndex) {
      slideIndex = maxIndex;
      sliderUrl = urls[slideIndex];
   }
   updateView()
   }