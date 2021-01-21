let cssInit = `
body{
    width:100%
    heigth:100vh;
    display:flex;
    justify-content:center;
    padding-top: 30%;
}
.roundedBox{
    width:10rem; 
    height:10rem; 
    background-color : teal;
    border-radius: 15%; 
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 5rem
}
.roundedBox:hover{
    background-color: red;
    width:12rem;
    height:12rem;
    font-size: 6rem;
    transition: all .4s;
}`;


let container = document.getElementById('container');
let roundedBox = document.createElement('div');
roundedBox.classList.add('roundedBox');
container.appendChild(roundedBox);

let i=0;
roundedBox.addEventListener('mouseover', ()=>{i++;
    roundedBox.innerHTML =`${i}`;
});


let header = document.getElementById('header');
let styles = document.createElement('style');
header.appendChild(styles);
styles.innerHTML = cssInit;