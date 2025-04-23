function setProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('productPage')

}

function setAuctionProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('inAuction')

}

function setProductCategoryPage(categoryId) {
   model.app.selectedListingId = categoryId;
   setPage('productCategory')
}

function setPage(pagename) {
   model.app.previousPage = model.app.currentPage;
   model.app.currentPage = pagename;
   updateView()
}