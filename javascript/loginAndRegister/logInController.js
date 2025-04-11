function logIn(){
   const user = model.data.users.find(x => 
    x.userName === model.input.logIn.userName
    && x.password === model.input.logIn.password);

    if(user){
        model.app.isLoggedIn = user.id;
        setPage('home');
    }
    
   updateView();

}