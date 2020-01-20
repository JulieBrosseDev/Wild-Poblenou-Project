window.onload=function(){
    //to declair variables
    var buttonsMap = document.querySelectorAll('.button')
    var buttonsKnow = document.querySelectorAll('.knowMore')
    var buttonsKnowLess = document.querySelectorAll('.knowLess')
    
    //recorrer array de botones
    buttonsMap.forEach(function(but){
        but.onclick = showArticle
    })

    buttonsKnow.forEach(function(k){
        k.onclick = showAllText
    })

    buttonsKnowLess.forEach(function(l){
        l.onclick = hideText
    })
   
}
function showArticle(){
    //recover the value of the text clicked
    let idText = this.value
    
    //remove class for this text so we could show the article
    document.getElementById(idText).classList.toggle('hidden')
    document.querySelector('.knowLess').style.display='none'
}
function showAllText() {
    let idText = this.value

    document.getElementById(idText).style.overflow='visible'
    document.getElementById(idText).style.height='100%'
    document.querySelector('.knowMore').style.display='none'
    document.querySelector('.knowLess').style.display='initial'

}
function hideText(){
    let idText =this.value 

    document.getElementById(idText).style.overflow='hidden'
    document.getElementById(idText).style.height='200px'
    document.querySelector('.knowMore').style.display='initial'
    document.querySelector('.knowLess').style.display='none'
}
