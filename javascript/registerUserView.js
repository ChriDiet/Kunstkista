registerUserView()
function registerUserView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    ${drawRegisterUserHtml()};
    
    
    
    `;
}


function drawRegisterUserHtml(){
    return /*HTML*/`
    <h2>Fyll ut feltene for registrering:</h2><br/>
    <input placeholder="Brukernavn"><br/>
    <input placeholder="Fornavn"><br/>
    <input placeholder="Etternavn"><br/>
    <input placeholder="Epost"><br/>
    <input placeholder="Gatenavn"><br/>
    <input placeholder="Postnummer"><br/>
    <input placeholder="By"><br/>
    <input placeholder="Telefon nummer"><br/>
    <input placeholder="Passord"><br/>
    <input placeholder="Gjenta passord"><br/>
    <div>Logg direkte inn</div><br/>
    <button>Fullfør registreringen</button>
    `;
    
    
    
}