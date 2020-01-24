let arrayOfSections = ["music", "sports", "enterteinment", "arts"]
document.getElementById(arrayOfSections[x]).addEventListener('click', function(x){
    
    alert('hola')
    setTimeout(function(i){s
        window.location.href = '#'+i;
    }, 100);
})