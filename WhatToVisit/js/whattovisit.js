window.onload=function(){
    //to declair variables
    var buttonsMap = document.querySelectorAll('.button')
    var buttonsKnow = document.querySelectorAll('.know')
    
    //recorrer array de botones
    buttonsMap.forEach(function(but){
        but.onclick = showArticle
    })

    buttonsKnow.forEach(function(k){
        k.onclick = showAllText
    })
   
/*
    document.getElementById('texto1').classList.toggle('show')
    document.getElementById('know1').classList.toggle('hide')
    document.getElementById('less1').classList.toggle('lessshow')
*/
}
function showArticle(){
    //recover the value of the text clicked
    let idText = this.value
    
    //remove class for this text so we could show the article
    document.getElementById(idText).classList.toggle('hidden')
}
