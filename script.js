const player = document.querySelector(".player");
const coordinates = document.querySelector(".coordinates");

window.addEventListener('load', () => {
    
    player.style.position = 'absolute';
    player.style.left = 200 +'px';
    player.style.top = 200+'px';
    coordinates.innerHTML = "[" + parseInt(player.style.left)+","+parseInt(player.style.top)+"]";
});

let moveBy = 25;

window.addEventListener('keydown',(e)=>{

        switch(e.key){
            case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            coordinates.innerHTML = "[" + parseInt(player.style.left)+","+parseInt(player.style.top)+"]";
            break;
            case 'ArrowLeft':
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            coordinates.innerHTML = "[" + parseInt(player.style.left)+","+parseInt(player.style.top)+"]";
            break;
            case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            coordinates.innerHTML = "[" + parseInt(player.style.left)+","+parseInt(player.style.top)+"]";
            break;
            case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            coordinates.innerHTML = "[" + parseInt(player.style.left)+","+parseInt(player.style.top)+"]";
            break;
        }
        if(parseInt(player.style.top)>=650&&parseInt(player.style.left)>=575){
            player.style.left = 200 +'px';
            player.style.top = 200+'px';
            player.style.backgroundImage = 'url(./fire.png)';
            alert("You Lost");
        }
});