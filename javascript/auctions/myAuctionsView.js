function showMyAuctionsView(){
    return /*HTML*/`
    <div class="auction-container">
    <div class="auctions-list">
        <h2>Mine auksjoner</h2>
        ${createMyArtContainer()}
    </div>
    `
}
function createMyArtContainer() {
    let html = '';
    const listings = model.data.listings;
    const listingImages = model.data.listingImages;
    const currentUserId = model.app.loggedInUserId; 
    
    const userAuctionListings = listings.filter(listing =>
        listing.userId === currentUserId &&
        listing.salesFormId === 2 &&
        listing.approvedForSale
    );

    for (let listing of userAuctionListings) {
        const image = listingImages.find(img => img.listingId === listing.id);
        const imgUrl = image ? image.url : 'placeholder.jpg';

        html += `
        <div class="artContainer">
            <img src="${imgUrl}" alt="Produktbilde">
            <div class="info">
                <p>${listing.title}</p>
                <p class="price">Startpris: ${listing.price} kr</p>
            </div>
            <button class="bid-button" onclick="setAuctionProductPage(${listing.id})">Gå til auksjon</button>
        </div>
        `;
    }

    return html;
}