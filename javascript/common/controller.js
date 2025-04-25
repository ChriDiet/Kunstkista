function setProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('productPage')
}

function setAuctionProductPage(listingId) {
   model.app.selectedListingId = listingId;
   setPage('inAuction')

}

function setProductCategoryPage(categoryId) {
   model.app.selectedCategory = categoryId;
   setPage('productCategory')
}

function setPage(pagename) {
   model.app.previousPage = model.app.currentPage;
   model.app.currentPage = pagename;
   updateView()
}

function setAdminApprovalPage(listingId) {
   model.app.selectedListingForApprovalId = listingId;
   setPage('adminProductPageApproval')
}

function setSelectedUserId(userId) {
   console.log(userId)
   model.app.selectedUserId = userId;
   setPage('profile')
}
