
//Her skal det lages en funksjon som bytter passord.

function changePassword(){
   const user = model.data.users.find(user => user.isLoggedIn === true);
    if(user.password !== model.input.editUser.newPassword && model.input.editUser.newPassword === model.input.editUser.repeatNewPassword){
        user.password = model.input.editUser.newPassword;
        setPage('logIn');
      } else if(user.password === model.input.editUser.newPassword){
        alert('Nytt passord kan ikke være likt gammelt passord!');
      } else {
        alert('Passordene er ikke like!');
      }
    } 
        




    
    





