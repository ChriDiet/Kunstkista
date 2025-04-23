function showInAuctionView(listingId) {
    const listing = model.data.listings.find(l => l.id === listingId);
    const image = model.data.listingImages.find(img => img.listingId === listingId);
    const imgUrl = image ? image.url : 'placeholder.jpg';
    let html = `
      <div class="auction-detail">
        <h2>Auksjon avsluttes: 1 dag 10 timer 2 minutter</h2>
        <div class="art-detail">
            <img src="${imgUrl}" alt="Kunstbilde">
            <div class="description">
                <p>${listing.title}</p>
                <p>${listing.description || "Beskrivelse kommer her."}</p>
            </div>
        </div>
        <div class="bid-section">
            <input type="number" id="bidInput" value="${listing.price + 500}" />
            <button onclick="submitBid(${listingId})">Legg inn bud</button>
        </div>
        <div class="bid-history">
            <p>Gjeldende bud: ${listing.price}kr</p>
            <p>Utgåtte bud: 1500kr</p>
            <p>Utgåtte bud: 1000kr</p>
        </div>
    </div>
    `;
    document.getElementById("app").innerHTML = html;
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