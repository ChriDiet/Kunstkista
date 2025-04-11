function generateRandomUsers() {
   let firstnames = ['Christina', 'Numan', 'Kristian', 'Daniel', 'Geir', 'Dag', 'Pernille', 'Marie', 'Trine', 'Martin', 'Birk', 'Mohammed', 'Hussain', 'Eyoub', 'Charlotte', 'Odin', 'Iben', 'Eva', 'Rikke', 'Liam', 'Line', 'Luna', 'Andreas', 'Zaneta', 'Siber', 'Arselan', 'Monica', 'Lasse', 'Anne-Marie', 'Kristine', 'Lucie', 'Lexi', 'Lotta', 'Sumaya', 'Youness', 'Omar', 'Shama', 'Victor', 'Fatima', 'Rikard', 'Live', 'Susanne', 'Espen', 'Halvard', 'Gytis', 'Torbjørn', 'Julie', 'Jimmi', 'Nicole', 'Nina', 'Sofus', 'Andrew', 'Stephannie', 'Goitom', 'Nikita', 'Linda', 'Else', 'Raj', 'Sara', 'Linus']
   let usersToGenerate = 40;

   for (let i = 0; i < usersToGenerate; i++) {
      let firstname = createRandomFirstname(firstnames);
      let newUser = createNewUser(firstname);
      model.data.users.push(newUser)
   }

   return model.data.users;
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
      rating: 5
   }
}
// for(let listing of model.data.listings) {
//    const url = model.data.listingImages.find(x => x.listingId === listing.id)?.url ?? 'placeholder.png';
//    const location = model.data.userContactInfos.find(x => x.userId === listing.userId).city;

   function createNewUserContactInfo() {

      for (let user of model.data.users) {
         let userId = user.id;
         let userName = user.firstName;
         let phoneNumber = createPhoneNumber()
         let email = user.username + '@testbruker.no';
      }

   }

   function createAddress() {

   }

   function createRandomFirstname(names) {
      let randomFirstname = names[Math.floor(Math.random() * names.length)];
      return randomFirstname
   }

   function createRandomPassword() {
      let password = Math.random().toString(36).substring(2, 8);
      return password;
   }


   function createRandomCategory() {
      let categories = [];
      let randomCategory = '';

      for (let categori of model.data.categories) {
         categories.push(categori.name)
      }
      randomCategory = categories[Math.floor(Math.random() * categories.length)];
      return randomCategory;
   }


   function createUsername(name) {
      let randomUsername = name + (Math.floor(Math.random() * 2000) + 100);
      return randomUsername;
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

   function createPhoneNumber() {
      let phoneNumber = '';
      
      for (let i = 0; i < 8; i++) {
         let randomNumber = 0;
         randomNumber = Math.floor(Math.random() * 9) + 1;
         phoneNumber += randomNumber
      }
      return phoneNumber;
   }