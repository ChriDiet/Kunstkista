function logIn(){
   
    for(let users of model.data.users){
        if(model.input.logIn.userName === users.userName && model.input.logIn.password === users.password){
            users.isLoggedIn = true;
            alert('Velkommen')
            setPage('home')

        } else{
            alert('Brukernavn eller passord er feil')
        }
    }
   

}