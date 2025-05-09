function getNextUserId() {
   let maxId = 0;
   for (const user of model.data.users) {
      if (user.id > maxId) {
         maxId = user.id;
      }
   }
   return maxId + 1;
}

function getNextListingId() {
      let maxId = 0;
      for (const listing of model.data.listings) {
         if (listing.id > maxId) {
            maxId = listing.id;
         }
      }
      return maxId + 1;
   }

function getNextContactInfoId() {
   let maxId = 0;
   for (const userContactInfo of model.data.userContactInfos) {
      if (userContactInfo.id > maxId) {
         maxId = userContactInfo.id;
      }
   }
   return maxId + 1;
}

function getNextListingImageId() {
   let maxId = 0;
   for (const listingImage of model.data.listingImages) {
      if (listingImage.id > maxId) {
         maxId = listingImage.id;
      }
   }
   return maxId + 1;
}

function isHome() {
   if (model.app.currentPage == 'home')
      return true;
   if (!model.app.currentPage == 'home')
      return false;
}