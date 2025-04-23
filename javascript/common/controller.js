function setProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('productPageCustomer')

}

function setAuctionProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('inAuction')

}

function setCategoryProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('productCategory')

}