const canvas = document.getElementById("platform");
const ctx = canvas.getContext("2d");
const innerBasin = document.querySelector('.innerBasin');
const tiles = {
    square: `<div class="square tiles" style="height:60px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
    line: `<div class="line tiles" style="height:120px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
    lright: `<div class="lright tiles" style="height:60px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
    lleft: `<div class="lleft tiles"  style="height:60px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
    zigleft: `<div class="zigleft tiles" style="height:60px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
    zigright: `<div class="zigright tiles" style="height:60px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
    crown: `<div class="crown tiles" style="height:60px">
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             <div class="block"></div>
             </div>`,
};
const tilesArray = [tiles.square, tiles.line, tiles.lright, tiles.lleft, tiles.zigleft, tiles.zigright, tiles.crown];
for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 30, 0);
    ctx.lineTo(i * 30, 540);
    ctx.stroke();
}
for (let i = 0; i < 18; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 30);
    ctx.lineTo(300, i * 30);
    ctx.stroke();
}
    let yAxis = 0;
    var bottom = false;
    let height;
    let platformHeight = 540
function dropTile(){
    yAxis = 0;
    let droppedTile = tilesArray[Math.floor(Math.random() * tilesArray.length)];
    innerBasin.innerHTML += droppedTile;
    droppedTile = document.querySelector('.innerBasin .tiles:last-child');
    height = droppedTile.style.height.split('px').join('');
    console.log(height);
    console.log(yAxis);
    let interval = setInterval(function(){
        console.log(yAxis,(yAxis <= 540 - height))
        if(yAxis <= platformHeight - height){
        droppedTile.style.top = yAxis + 'px';
        yAxis += 30;
        
        }else{
            platformHeight -= height;
            redrop();
            clearInterval(interval);
        }
    },1000)
}
dropTile();
function redrop(){
    dropTile();
}