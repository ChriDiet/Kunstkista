function drawChangePasswordAndUserNameHtml(){
    return /*HTML*/`
    <h2>Bytt brukernavn eller passord</h2>
    <div class="passwordAndUserNameContainer">
        <div>
            <img class="loginImage" src="images/profilePicPlaceHolder.png">
            <input 
                oninput="model.input.editUser.newUserName = this.value" 
                placeholder="Nytt brukernavn"
                value="${model.input.editUser.newUserName}"
                ><br/>
            <input 
                oninput="model.input.editUser.newPassword = this.value" 
                placeholder="Nytt passord"
                value="${model.input.editUser.newPassword}"    
                ><br/>
            <input 
                oninput="model.input.editUser.repeatNewPassword = this.value" 
                placeholder="Repeter nytt passord"
                value="${model.input.editUser.repeatNewPassword}"
            ><br/>
            <button onclick="changeUserNameAndPassword()">Bekreft</button>
        </div>
    </div>
    `;
}
    
    
    
    
    
    

    



