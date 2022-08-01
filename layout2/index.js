let header = document.getElementById('header')
let btnMenu = document.getElementById('btn-menu')
btnMenu.onclick = function(){
    var isOpen = header.style.display === 'block'
    if(isOpen){
        header.style.display = null 
    }else{
        header.style.display = 'block' 
    }
}