function showInAuctionView(listingId) {
    return /*HTML*/ `
      <div class="productPageContainer">
      <div class="category">
         <div class="infoHeader">
            <div class="productInfoContainer top">
               <div>
               </div>
               ${getAuctionListingInformation()}
               
               </div>
            </div>
            </div>
         </div>
      </div>
   `;
    // const listing = model.data.listings.find(l => l.id === listingId);
    // const image = model.data.listingImages.find(img => img.listingId === listingId);
    // const imgUrl = image ? image.url : 'placeholder.jpg';
    // let html = `
    //   <div class="auction-detail">
    //     <h2>Auksjon avsluttes: 1 dag 10 timer 2 minutter</h2>
    //     <div class="art-detail">
    //         <img src="${imgUrl}" alt="Kunstbilde">
    //         <div class="description">
    //             <p>${listing.title}</p>
    //             <p>${listing.description || "Beskrivelse kommer her."}</p>
    //         </div>
    //     </div>
    //     <div class="bid-section">
    //         <input type="number" id="bidInput" value="${listing.price + 500}" />
    //         <button onclick="submitBid(${listingId})">Legg inn bud</button>
    //     </div>
    //     <div class="bid-history">
    //         <p>Gjeldende bud: ${listing.price}kr</p>
    //         <p>Utgåtte bud: 1500kr</p>
    //         <p>Utgåtte bud: 1000kr</p>
    //     </div>
    // </div>
   // `;
    //document.getElementById("app").innerHTML = html;
 }
 
 function submitBid(listingId) {
    const input = document.getElementById('bidInput');
    const bidAmount = parseInt(input.value);
    const listing = model.data.listings.find(l => l.id === listingId);
    
    
    if (bidAmount > listing.price) {
        listing.price = bidAmount;
        alert('Bud lagt inn!');
        showInAuctionView(listingId);
    } else {
        alert('Budet må være høyere enn gjeldende bud.');
    }
    
}
function getAuctionListingInformation() {
    let productListingId = model.app.selectedListingId;
    let username;
    let imgUrl;
    let location;
    let condition;
    
    
       for (let listing of model.data.listings) {
          if (listing.salesFormId == 1 && listing.id == productListingId) {
          imgUrl = model.data.listingImages.find(x => x.listingId === listing.id)?.url ?? './images/placeholder.png'; 
          location = model.data.userContactInfos.find(x => x.userId === listing.userId).city;
          username = model.data.users.find(x => x.id === listing.userId).userName;
          condition = model.data.productCondition.find(x => x.id === listing.conditionId).condition;
       return /*HTML*/`
       <p class="largeFont">${listing.title}</p>
                <p class="mediumFont">${listing.description}</p>
             </div>
             <div class="userInfo top mediumFont">
                <p class="link">${username}✓ </p>
                <p>📍${location}</p>
             </div>
          </div>
          <div class="imageContainer productPage">
             <div class="bigImage productPage">
                <img src="${imgUrl}">
             </div>
             <div class="smallImages productPage">
                <img src="${imgUrl}">
                <img src="${imgUrl}">
                <img src="${imgUrl}">
             </div>
             <div class="history">
                <div class="largeFont">Historie</div>
                <div class="mediumFont">${listing.story}</div>
             </div>
          </div>
          
          <div class="bid-section">
          <input type="number" id="bidInput" value="${listing.price}" />
           <button onclick="submitBid(${productListingId})">Legg inn bud</button>
      </div>
       <div class="bid-history">
           <p>Gjeldende bud: ${listing.price}kr</p>
           <p>Utgåtte bud: 1500kr</p>
          <p>Utgåtte bud: 1000kr</p>
       </div>
      

          <div class="productInfoContainer bottom">
          <p class="largeFont underline">Informasjon</p>
             <div class="productInfo bottom">
                <p class="mediumFont"><b>Tilstand:</b> ${condition}</p>
                <p class="mediumFont"><b>Mål:</b> ${listing.measurements} cm</p>
                <p class="largeFont">Pris: ${listing.price},-</p>
                <p class="mediumFont"><b>Kan hentes:</b> ${listing.pickup ? 'Ja' : 'Nei'}</p>
                <p class="mediumFont"><b>Kan sendes:</b> ${listing.send ? 'Ja' : 'Nei'}</p>
                <button class="medium font">Kontakt selger</button>
                
     </div>`
     
       }
    }
 }