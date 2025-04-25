function showProfileView(){
    let loggedInUser = '';
    const user = model.data.users.find(users => users.id == model.app.isLoggedIn);
    if(user){
        loggedInUser = `${user.firstName} ${user.lastName}`; 
    }
    
    return /*HTML*/`
        <h2>${loggedInUser}</h2>
        <img class="loginImage" src="images/profilePicPlaceHolder.png">
        <div class="profileInfoContainer">
            <div class="profileInfo">
                <h3>Brukernavn</h3>
                <p>${user.username}</p>
            </div>
            <div class="profileInfo">
                <h3>Fornavn</h3>
                <p>${user.firstName}</p>
            </div>
            <div class="profileInfo">
                <h3>Etternavn</h3>
                <p>${user.lastName}</p>
            </div>
                <div class="profileInfo">
                    <h3>Epost</h3>
                <p>${user.email}</p>
            </div>
        </div>
            
            
            
            
            
            
            
            
            
        
        
    
    
    

    
    `;
}