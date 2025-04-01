function logIn(){
    document.getElementById('userName').value;
    document.getElementById('password').value;

    if(model.input.logIn.userName && model.input.logIn.password === true){
        model.app.isLoggedIn = true;
    }


    createLogInView();

}