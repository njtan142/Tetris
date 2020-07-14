var tiles = document.querySelectorAll('.tiles');
let tilesArray = []
tiles.forEach(tile => tilesArray.push(tile));
tilesArray[Math.floor(Math.random() * tilesArray.length)].addEventListener('click',function(tiles){
    console.log(tiles.path[1])
})