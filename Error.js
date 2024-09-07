var container = document.getElementBy('container');
window.onmousemove = function(e){
    var x = - e.clientX/5;
        y = - e.clientY/5;
     
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = Y + 'px';     
} 
