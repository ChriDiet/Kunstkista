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

function setPage(pagename) {
   model.app.previousPage = model.app.currentPage;
   model.app.currentPage = pagename;
   updateView()
}