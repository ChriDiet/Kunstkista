function changePassword(){
    const userLoggedIn = model.data.users.find(user => user.isLoggedIn);
    const indexOfLoggedInUser = model.data.users.indexOf(userLoggedIn);
    if(userLoggedIn){
        model.data.users[indexOfLoggedInUser].password = model.input.editUser.newPassword && model.input.editUser.repeatNewPassword;
        
    }

    
    
}





