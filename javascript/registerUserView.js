



function drawRegisterUserHtml(){
    return /*HTML*/`
    <h2>Fyll ut feltene for registrering:</h2><br/>
    <div class="registerUserContainer">
    <div>
    <input 
    id="userName"
    placeholder="Brukernavn"
    value="${model.input.registerUser.userName ?? ''}"
    oninput="model.input.registerUser.userName = this.value"
    required>
    <br/>
    
    <input id="foreName"
        placeholder="Fornavn"
        value="${model.input.registerUser.firstName ?? ''}"
        oninput="model.input.registerUser.firstName = this.value"
        required>
        <br/>
        
        <input 
        id="lastName"
        placeholder="Etternavn"
        value="${model.input.registerUser.lastName ?? ''}"
        oninput="model.input.registerUser.lastName = this.value"
        required>
        <br/>
        
        <input 
        id="email"
        placeholder="Epost"
        value="${model.input.registerUser.email ?? ''}"
        oninput="model.input.registerUser.email = this.value"
        required>
        <br/>
        
        <input 
        id="streetName" 
        placeholder="Gatenavn"
        value="${model.input.registerUser.streetName ?? ''}"
        oninput="model.input.registerUser.streetName = this.value"
        required>
        <br/>
        
        <input 
        id="postalCode" 
        placeholder="Postnummer"
            value="${model.input.registerUser.postalCode ?? ''}"
            oninput="model.input.registerUser.postalCode"
            required>
            <br/>
            
            
            <input 
            id="city" 
            placeholder="By"
            value="${model.input.registerUser.city ?? ''}"
            oninput="model.input.registerUser.city = this.value"
            required>
            <br/>
            
            <input 
            id="phoneNumber" 
            placeholder="Telefon nummer"
            value="${model.input.registerUser.phoneNumber ?? ''}"
            oninput="model.input.registerUser.phoneNumber = this.value"
            required>
            <br/>
            
            <input 
            type="password" 
            id="password" 
            placeholder="Passord"
            value="${model.input.registerUser.password ?? ''}"
            oninput="model.input.registerUser.password = this.value"
            required>
            <br/>
            
            
            <input 
            type="password" 
            id="repeatPass" 
            placeholder="Gjenta passord"
            value="${model.input.registerUser.repeatPassword ?? ''}"
            oninput="model.input.registerUser.repeatPassword = this.value"
            required>
            <br/>
            
            <div class="link" onclick="setPage('logIn')">Logg direkte inn</div><br/>
            <button onclick="registerNewUser()">Fullfør registreringen</button>
            </div>
            </div>
            `;
        }
        
        
        