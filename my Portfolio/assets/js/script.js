var action = document.getElementById('btn');
action.addEventListener("click", function(){
     var etat=document.getElementById('nav-items').style.visibility;
    if(etat=="hidden"){
        document.getElementById('nav-items').style.visibility="visible";
        document.getElementsByName('nav-link').style.visibility="visible";
}
    else{
        document.getElementsByClassName('nav-link').style.visibility="hidden";
    }
}
    , false);
