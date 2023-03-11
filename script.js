



function menu (){

    if(document.getElementById("nav").style.opacity == 0){
        document.getElementById("nav").style.opacity = 1
        document.getElementById("nav").style.zIndex = 300
    }else{
        document.getElementById("nav").style.opacity = 0
        document.getElementById("nav").style.zIndex = 0
    }
    
    
}