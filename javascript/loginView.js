
function createLogInView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    ${createHeader()}
    ${drawLogInHtml()}
    
    
    `;
    
}
function drawLogInHtml(){
    return /*HTML*/`
    <h2>Logg inn</h2>
    <div class="logInContainer">
        <img src="images/profilePicPlaceHolder.png"><br/>
        <input
             placeholder="brukernavn"
             value="${model.input.logIn.userName}"
             oninput="model.input.logIn.userName = this.value">
             <br/>
             
        <input 
            type="password" 
            placeholder="passord"
            value="${model.input.logIn.userName}"
            oninput="model.input.logIn.userName = this.value">
            <br/>

        <div>Glemt passord?</div>
        <button onclick="logIn()">Logg inn</button>
        <div onclick="registerUserView()">registrer ny bruker</div>
    </div>
    `;
}




    
    
