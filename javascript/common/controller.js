function setProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('productPageCustomer')

}

function setAuctionProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('inAuction')

}