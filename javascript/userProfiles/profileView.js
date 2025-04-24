function showProfileView(){
    let loggedInUser = '';
    const user = model.data.users.find(users => users.id == model.app.isLoggedIn);
    if(user){
        loggedInUser = `${user.firstName} ${user.lastName}`; 
    }
    
    return /*HTML*/`
        <h2>${loggedInUser}</h2>
    
    
    
    

    
    `;
}