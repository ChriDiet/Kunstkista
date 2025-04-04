function showAuctionsView() {
   let html = `
    <h2>Auksjonsoversikt</h2>
    <h3>Auksjon avsluttes: <span id="countdown">1 dag 10 timer 2 minutter</span></h3>
    
    
    
    
    <p>Dato: 3. april kl 18:00</p>
    <p>Dato: 10. april kl 19:00</p>
    <p>Dato: 17. april kl 18:00</p>
    <h2>Pågående auksjoner</h2>
    `

   let listings = model.data.listings;
   let imgUrl = '';

   for (let i = 0; i < listings.length; i++) {
      if (model.data.listingImages[i].listingsId == listings.id) {
         imgUrl = model.data.listingImages[i].url;
      }

      html += `
            <div class="auctions-container" id="auctions">
              <div class="artContainer">
                 <img src="${imgUrl}"/>
                 <p>${listings[i].title}</p>
                 <p>${listings[i].price},-</p>
                 <div id="bid-button"> 
                 <button>Bli med</button>
                 </div>
              </div>
              </div>
              `
   }
   return html;
}