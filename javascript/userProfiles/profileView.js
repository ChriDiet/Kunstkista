function showProfileView(){
    let loggedInUser = '';
    let profileUser = '';
    let typeOfButton = '';
    let typeOfPage = '';
    const user = model.data.users.find(users => users.id == model.app.isLoggedIn);
    const userContactInfo = model.data.userContactInfos.find(user => user.id == model.app.isLoggedIn);
    
    if(user){
        loggedInUser = `${user.firstName} ${user.lastName}` 
    }
    profileUser = model.data.users.find(user => user.id == model.app.isLoggedIn);
    
    if(profileUser){
        typeOfPage = 'contactInfo';
        typeOfButton = "Rediger profil";
    } else{
        typeOfPage = 'editProfile';
        typeOfButton = 'KontaktInformasjon';
    }
       
    return /*HTML*/`
    <div class="profileInfoContainer">
    <h2>${loggedInUser}</h2><br/>
    <img class="loginImage" src="images/profilePicPlaceHolder.png">
        <div class="profileInfo">
            <div>${userContactInfo.city} ${user.rating}</div><br/>
            <button onclick="setPage(typeOfPage)">${typeOfButton}</button>
            <h3>Bio:</h3>
            <div>${user.personalBio}</div> 
            <h3>Anmeldelser</h3>
            
            
           
                
        </div>
                
            
            
            
            
            
            
           
            
            
            
            
            
            
            
            
            
        
        
    
    
    

    
    `;
}