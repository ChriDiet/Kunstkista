
//Her skal det lages en funksjon som bytter passord.

function changePassword(){
    const user = model.data.users.find(loggedInUser => loggedInUser.userName === model.data.users.userName)
    if(user){
        model.app.isLoggedIn = user.id;
        user.password = model.input.editUser.newPassword && model.input.editUser.repeatNewPassword;
        setPage('login');
    }



    
    
}





