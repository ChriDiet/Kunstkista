registerUserView()
function registerUserView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    ${drawRegisterUserHtml()};
    
    
    
    `;
}


function drawRegisterUserHtml(){
    return /*HTML*/`
    <h2>Fyll ut feltene for registrering:</h2><br/>
    <input id="userName" placeholder="Brukernavn"><br/>
    <input id="foreName" placeholder="Fornavn"><br/>
    <input id="lastName" placeholder="Etternavn"><br/>
    <input id="email" placeholder="Epost"><br/>
    <input id="streetName" placeholder="Gatenavn"><br/>
    <input id="postalCode" placeholder="Postnummer"><br/>
    <input id="city" placeholder="By"><br/>
    <input id="phoneNumber" placeholder="Telefon nummer"><br/>
    <input id="password" placeholder="Passord"><br/>
    <input id="repeatPass" placeholder="Gjenta passord"><br/>
    <div>Logg direkte inn</div><br/>
    <button onclick="registerUser()">Fullfør registreringen</button>
    `;
}
    
 
    