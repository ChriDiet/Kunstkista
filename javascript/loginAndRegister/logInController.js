function logIn(){
    document.getElementById('userName').value;
    document.getElementById('password').value;

    for(let users of model.data.users){
        if(users.userName === model.data.users.userName
            && users.password === model.data.users.password
        ){
            model.data.users.id == model.app.isLoggedIn
            model.app.isLoggedIn = true
        }
    }


    createLogInView();

}