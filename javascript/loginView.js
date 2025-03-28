createLogInView();
function createLogInView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    ${drawLogInHtml()}
    
    
    `;
    
}
function drawLogInHtml(){
    return /*HTML*/`
    <h2>Logg inn</h2>
    <img src="images/profilePicPlaceHolder.png"><br/>
    <input placeholder="brukernavn"><br/>
    <input placeholder="passord"><br/>
    <div>Glemt passord?</div>
    <button onclick="logIn()">Logg inn</button>
    <div>registrer ny bruker</div>
    `;
}


    
    
