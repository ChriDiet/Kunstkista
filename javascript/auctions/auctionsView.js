
function showAuctionsView() {
   let html = `
   <div class="auction-page">
   <button onclick="setPage('myauctions')">Mine auksjoner</button>
    
       <h2>Auksjon avsluttes: <span id="countdown">1 dag 10 timer 2 minutter</span></h2>
       
       <div class="auction-container">
           <div class="auctions-list">
               <h2>Pågående auksjoner</h2>
               ${createArtContainer()}
           </div>
           
           <div class="auction-overview">
               <h2>Auksjonsoversikt</h2>
               <p>Dato: 3. april kl 18:00</p>
               <p>Dato: 10. april kl 19:00</p>
               <p>Dato: 17. april kl 18:00</p>
           </div>
       </div>
   </div>
   `;
   return html;
}

function createArtContainer() {
   let html = '';
   let listings = model.data.listings;
   let listingImages = model.data.listingImages;
   let newListings = model.data.listings.length; 

   for (let i = 0; i < newListings; i++) {
       let listing = listings[i];
       let image = listingImages.find(img => img.listingId == listing.id);
       let imgUrl = image ? image.url : 'placeholder.jpg';

       html += `
       <div class="artContainer">
           <img src="${imgUrl}" alt="Produktbilde">
           <div class="info">
               <p>${listing.title}</p>
               <p class="price">Gjeldende bud: ${listing.price}kr</p>
           </div>
           <button class="bid-button" onclick="setAuctionProductPage(${listing.id})">Bli med</button>
       </div>
       `;
   }
   return html;
}
             
   