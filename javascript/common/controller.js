function getNextUserId(){
    let maxId = 0;

    for(const user of model.data.users){
        if(user.id > maxId){
            maxId = user.id;
        }
    }
    return maxId +1;



}
      

