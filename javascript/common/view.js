function updateView() {
   changeView()
}

function goToPreviousPage() {
   let previousPage = model.app.previousPage;
   setPage(previousPage);
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

      case page.categories:
         currentView = showCategoriesView();
         break;

      case page.myAuctions:
         currentView = showMyAuctionsView();
         break;

      case page.registerUser:
         currentView = drawRegisterUserHtml();
         break;

      case page.editUser:
         currentView = showEditUserView();
         break;

      case page.newSale:
         currentView = drawNewSaleHtml();
         break;

      case page.productPage:
         currentView = showProductPageView();
         break;

      case page.categories:
         currentView = showCategoriesView();
         break;

      case page.productCategory:
         currentView = showCategoriesView();
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

      case page.changePassword:
         currentView = drawChangePasswordHtml();
         break;
   }
   document.getElementById('app').innerHTML = /*HTML*/`
      ${createHeader()}
      ${currentView ? currentView : showHomeView()}`;
}