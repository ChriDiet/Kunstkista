function registerUser(){
    const user = {};

    user.id = getNextUserId();
    user.userName = model.input.registerUser.userName;
    user.firstName = model.input.registerUser.firstName;
    user.lastName = model.input.registerUser.lastName;
    user.email = model.input.registerUser.email;
    user.streetName = model.input.registerUser.streetName;
    user.postalCode = model.input.registerUser.postalCode;
    user.city = model.input.registerUser.city;
    user.phoneNumber = model.input.registerUser.phoneNumber;
    user.password = model.input.registerUser.password;
    user.repeatPassword = model.input.registerUser.repeatPassword;

    model.data.users.push(user);
}  
    