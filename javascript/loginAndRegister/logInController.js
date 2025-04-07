function logIn(){
    if(model.input.logIn.userName === model.data.users.userName && model.input.logIn.password === model.data.users.password){
        model.data.users.isLoggedIn = true;
        setPage('home');
    } else{
        model.data.users.isLoggedIn = false;
        alert('Brukernavn eller passord');
    }
   

}