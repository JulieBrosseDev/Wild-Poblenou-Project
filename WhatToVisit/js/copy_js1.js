window.onload=function(){
    
    //to declair variables for buttons
    //var buttonsMap = document.querySelectorAll('.button')
    
    var buttonsKnow = document.querySelectorAll('.knowMore')
    var buttonsKnowLess = document.querySelectorAll('.knowLess')
    
    //recorrer array de botones
    /* buttonsMap.forEach(function(but){
        but.onclick = showArticle

    }) */
     
    let map = document.getElementById('map-place');
    
    let buttons = map.getElementsByClassName('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
            let idText = this.value
            let current = document.querySelectorAll(".hidden")
            if(current.length > 0){
                current[0].className = current[0].className.replace('hidden', 'show')
            }
            
            this.className += " hidden";
            
            //current[0] = current[0].replace("hidden", "")
            //this.className += "show"
            //current.classList.toggle('show')
        })
        
    }

    buttonsKnow.forEach(function(k){
        k.onclick = showAllText
    })

    buttonsKnowLess.forEach(function(l){
        l.onclick = hideText
    })

    
   
}

/* function showArticle(){
    //recover the value of the text clicked
    let idText = this.value
    
    let map = document.getElementById('map-place');
    // Add active class to the current button (highlight it)
    let selected = document.getElementById(idText);
    selected.classList.toggle('show')

    let buttons = map.getElementsByClassName('button')


    /* for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
            let current = document.getElementsByClassName("hidden")
            current[0].className = current[0].className.replace("hidden", "")
            //this.className += "show"
            current.classList.toggle('show')
        })
        
    } */
 

/* var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
} */
   
    /*
    if(document.querySelector('.button') != this.value ){
    //document.getElementById(idText).classList.toggle('show')
    document.querySelector('.button').classList.toggle('show')
    }else{
        console.log(this.value)
        document.getElementById(idText).classList.toggle('show')
    }*/
    
    



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
