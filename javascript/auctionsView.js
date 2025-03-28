function createAuctionsView(){
    document.getElementById('app').innerHTML=/*HTML*/`
    ${showauctions()}
    
    `
    }
    createAuctionsView()

   function showauctions(){
    let html='';
    for (i=0;i<4;i++){
        html = model.data.listings[0].title;
        return html;
    }
   }