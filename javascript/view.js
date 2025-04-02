function updateView() {
   changeView()
}

function setPage(pagename) {
   model.app.currentPage = pagename;
   updateView()
}

function changeView() {
   let currentView = '';
   let currentPage = model.app.currentPage;
   let page = model.app.pages;

   switch (currentPage) {
      case page.home:
         currentView = showHomeView();
         break;

      case page.profile:
         currentView = showProfileView();  
         break; 
      
      case page.editProfile:
         currentView = showEditProfileView();
         break;

      case page.auctions:
         currentView = showAuctionsView();
         break;

      case page.login:
         currentView = drawLogInHtml();
         break;
      
      case page.inAuction:
         currentView = showInAuctionView();
         break;

      case page.myAuctions:
         currentView = showMyAuctionsView();  
         break; 
      
      case page.registerUser:
         currentView = showRegisterUserView();
         break;

      case page.editUser:
         currentView = showEditUserView();
         break;

      case page.newSale:
         currentView = drawNewSaleHtml();
         break;

      case page.productPageCustomer:
         currentView = showProductPageCustomerView();
         break;

      case page.productCategory:
         currentView = showProductCategoryView();
         break;
      
      case page.adminApprovalPage:
         currentView = showAdminApprovalPageView();
         break;

      case page.userContactInfo:
         currentView = showUserContactInfoView();  
         break; 
      
      case page.adminAuctionPageApproval:
         currentView = showAdminAuctionPageApprovalView();
         break;

      case page.adminProductPageApproval:
         currentView = showAdminProductPageApprovalView();
         break;
   }
      document.getElementById('app').innerHTML = /*HTML*/`
      ${createHeader()}
      ${currentView ? currentView : showHomeView()}`;
}