function createRandomUsers() {
   let firstnames = ['Christina', 'Numan', 'Kristian', 'Daniel', 'Geir', 'Dag', 'Pernille', 'Marie', 'Trine', 'Martin', 'Birk', 'Mohammed', 'Hussain', 'Eyoub', 'Charlotte', 'Odin', 'Iben', 'Eva', 'Rikke', 'Liam', 'Line', 'Luna', 'Andreas', 'Zaneta', 'Siber', 'Arselan', 'Monica', 'Lasse', 'Anne-Marie', 'Kristine', 'Lucie', 'Lexi', 'Lotta', 'Sumaya', 'Youness', 'Omar', 'Shama', 'Victor', 'Fatima', 'Rikard', 'Live', 'Susanne', 'Espen', 'Halvard', 'Gytis', 'Torbjørn', 'Julie', 'Jimmi', 'Nicole', 'Nina', 'Sofus', 'Andrew', 'Stephannie', 'Goitom', 'Nikita', 'Linda', 'Else', 'Raj', 'Sara', 'Linus']
   let usersToCreate = 40;
   for (let i = 0; i < usersToCreate; i++) {
      let firstname = createRandomFirstname(firstnames);
      let newUser = createNewUser(firstname);
      model.data.users.push(newUser)
   }
}



function createNewUserContactInfo() {
   let cities = ['Bergen', 'Oslo', 'Trondheim', 'Molde', 'Skien', 'Tønsberg', 'Larvik', 'Tromsø', 'Hønefoss', 'Sarpsborg', 'Fredrikstad', 'Verdal', 'Stjørdal', 'Drammen', 'Harstad', 'Kirkenes']
   for (let user of model.data.users.slice(6)) {
      let id = getNextContactInfoId();
      let userId = user.id;
      let phoneNumber = createPhoneNumber()
      let email = user.userName + '@testbruker.no';
      let street = 'Kunstsvingen ' + Math.floor(1 + Math.random() * 60)
      let postalCodeId = Math.floor(Math.random() * 4) + 1;
      let city = cities[Math.floor(Math.random() * cities.length)];

      model.data.userContactInfos.push({
         id: id,
         userId: userId,
         phoneNumber: phoneNumber,
         email: email,
         street: street,
         postalCodeId: postalCodeId,
         city: city
      })
   }
}



function createNewUser(name) {

   return {
      id: getNextUserId(),
      isAdmin: false,
      isLoggedIn: false,
      userName: createUsername(name),
      firstName: name,
      lastName: name + 'sen',
      password: createRandomPassword(),
      image: 'profilePicPlaceHolder.png',
      personalBio: 'Her er brukeren sin bio',
      rating: 5,
      verified: Math.random() < 0.85 ? false : true
   }
}

function createRandomFirstname(names) {
   let randomFirstname = names[Math.floor(Math.random() * names.length)];
   return randomFirstname
}

function createRandomPassword() {
   let password = Math.random().toString(36).substring(2, 8);
   return password;
}


function createUsername(name) {
   let randomUsername = name + (Math.floor(Math.random() * 2000) + 100);
   return randomUsername;
}

function createPhoneNumber() {
   let phoneNumber = '';

   for (let i = 0; i < 8; i++) {
      let randomNumber = 0;
      randomNumber = Math.floor(Math.random() * 9) + 1;
      phoneNumber += randomNumber
   }
   return phoneNumber;
}

function createNewListings() {
   let users = model.data.users;
   let listingsToCreate = 300;

   for (let i = 0; i < listingsToCreate; i++) {
      model.data.listings.push({
         id: getNextListingId(),
         userId: users[Math.floor(Math.random() * users.length)].id,
         salesFormId: Math.random() < 0.70 ? 1 : 2,
         categoryId: Math.floor(Math.random() * 8) + 1,
         title: 'Produktnavn',
         price: Math.floor(Math.random() * 7000) + 100,
         conditionId: Math.floor(Math.random() * 4) + 1,
         measurements: '10 x 20 x 10',
         description: 'Produktbeskrivelse',
         story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk. Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
         pickup: Math.random() < 0.5 ? false : true,
         send: Math.random() < 0.5 ? false : true,
         dateListed: createRandomDate(),
         waitingForApproval: Math.random() < 0.9 ? false : true,
         approvedForSale: Math.random() < 0.2 ? false : true,
      })
   }
}

function createRandomDate() {
   let randomDate = new Date(new Date(2022, 0, 1).getTime() + Math.random() * (new Date(2026,0,1).getTime() - new Date(2012, 0, 1).getTime()));
   let date = randomDate.toLocaleDateString();
   return date;
}

function createListingImages() {
   let nextListingImageId = getNextListingImageId();
   let listingImages = model.data.listingImages;
   let categoryImages = [ 
      { categoryId: 1, url: './images/maleri.png'},
      { categoryId: 2, url: './images/strikketoy.png'},
      { categoryId: 3, url: './images/figurer.png'},
      { categoryId: 4, url: './images/trearbeid.png'},
      { categoryId: 5, url: './images/fotografi.png'},
      { categoryId: 6, url: './images/dreidbolle.png'},
      { categoryId: 7, url: './images/rosemaling.png'},
      { categoryId: 8, url: './images/skrifter.png'},
   ]

   for(let listing of model.data.listings) {
      listingImages.push( {id: nextListingImageId, listingId: listing.id, url: categoryImages.find(x => x.categoryId === listing.categoryId).url})
   }
}

createRandomUsers();
createNewUserContactInfo();
createNewListings();
createListingImages();