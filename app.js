
const z = document.getElementById('zero')
let x;

document.getElementById('random').onclick = function(){
    
    x = Math.floor(Math.random()*100)+1;
    zero.textContent = x

     
};