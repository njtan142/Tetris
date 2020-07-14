var platform = document.querySelector(".platform");
var tileContainerAll = document.querySelectorAll(".tileContainer");
var objectValues;
var platformRows = 30;
var platformColumns = 40;
var coordinates = {
    x: 0,
    y: 0,
};
let time = 1;
var blockPosition = [0, 0];
var lineOrientation = 'vertical';
function randomDrop(){
    let array = ['square','line','lleft','lright','zigleft','zigright','crown'];
    let drop = array[random(array.length)];
    if(drop == array[0]){
        squareBlockCreate();
    }else if(drop == array[1]){
        lineBlockCreate();
    }else if(drop == array[2]){
        lleftBlockCreate();
    }else if(drop == array[3]){
        lrightBlockCreate();
    }else if(drop == array[4]){
        zigleftBlockCreate();
    }else if(drop == array[5]){
        zigrightBlockCreate();
    }else{
        crownBlockCreate();
    }
}
lrightBlockCreate();
function random(num) {
    return Math.floor(Math.random() * num);
}
function revalue() {
    tileContainerAll.forEach(function (box) {
        if (box.innerHTML == 1) {
            box.style.backgroundColor = "yellow";
            box.style.border = "1px dashed white";
        } else if(box.innerHTML == 2){
            box.style.backgroundColor = "blue";
            box.style.border = "1px dashed white";
        }else if(box.innerHTML == 3){
            box.style.backgroundColor = "orange";
            box.style.border = "1px dashed white";
        }else if(box.innerHTML == 4){
            box.style.backgroundColor = "darkblue";
            box.style.border = "1px dashed white";
        }else if(box.innerHTML == 5){
            box.style.backgroundColor = "red";
            box.style.border = "1px dashed white";
        }else if(box.innerHTML == 6){
            box.style.backgroundColor = "green";
            box.style.border = "1px dashed white";
        }else if(box.innerHTML == 7){
            box.style.backgroundColor = "violet";
            box.style.border = "1px dashed white";
        }else {
            box.style.backgroundColor = "white";
        }
    });
}
function arraytoObject(array) {
    let object = {}
    for(let i = 0; i < array.length; i++){
        object['row' + (i + 1)] = array[i];
    }
    return object;
}
function array2D(array, rows, columns) {
    let finalArray = [];
    for (let i = 0; i < rows; i++) {
        let group = [];
        for (let j = 0; j < columns; j++) {
            let value = array[i * columns + j];
            group.push(value);
        }
        finalArray.push(group);
    }
    return finalArray;
}
function squareBlockCreate() {
    let x = Math.floor(Math.random() * (platformColumns - 1));
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if (
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + 1].innerHTML == 0 &&
        tileContainerAll[x + platformColumns].innerHTML == 0 &&
        tileContainerAll[x + 1 + platformColumns].innerHTML == 0
    ) {
        tileContainerAll[x].innerHTML = 1;
        tileContainerAll[x + 1].innerHTML = 1;
        tileContainerAll[x + platformColumns].innerHTML = 1;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 1;
    } else {
        tileContainerAll[x].innerHTML = 1;
        tileContainerAll[x + 1].innerHTML = 1;
        tileContainerAll[x + platformColumns].innerHTML = 1;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 1;
        console.log("Game Over");
        revalue();
        return false;
    }
    revalue();
    moveBlockSquare();
}
function moveBlockSquare() {
    time -= 10;
    console.log(time)
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 2 != platformRows) {
            if (
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML ==
                    0 &&
                tileContainerAll[(y + 2) * platformColumns + (x + 1)]
                    .innerHTML == 0
            ) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[y * platformColumns + (x + 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x + 1].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 1;
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML = 1;
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML = 1;
                tileContainerAll[(y + 2) * platformColumns + x + 1].innerHTML = 1;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
randomDrop();
            }
        } else {
            clearInterval(interval);
randomDrop();
        }
    }, time);
}
function lineBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns));
    lineOrientation = 'vertical';
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if(
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + platformColumns * 2].innerHTML == 0 &&
        tileContainerAll[x + platformColumns * 3].innerHTML == 0 &&
        tileContainerAll[x + platformColumns * 4].innerHTML == 0 
    ){
        tileContainerAll[x].innerHTML = 2;
        tileContainerAll[x + platformColumns].innerHTML = 2;
        tileContainerAll[x + platformColumns * 2].innerHTML = 2;
        tileContainerAll[x + platformColumns * 3].innerHTML = 2;
        revalue();
    } else {
        tileContainerAll[x].innerHTML = 2;
        tileContainerAll[x + platformColumns].innerHTML = 2;
        tileContainerAll[x + platformColumns * 2].innerHTML = 2;
        tileContainerAll[x + platformColumns * 3].innerHTML = 2;
        revalue();
        return;
    }
  moveBlockLine();
}
function moveBlockLine(){
    time -= 10;
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 4 != platformRows && lineOrientation == 'vertical') {
            if (tileContainerAll[(y + 4) * platformColumns + x].innerHTML == 0) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 2;
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML = 2;
                tileContainerAll[(y + 3) * platformColumns + x].innerHTML = 2;
                tileContainerAll[(y + 4) * platformColumns + x].innerHTML = 2;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
randomDrop();
            }
        } else {
            clearInterval(interval);
randomDrop();
        }
    }, time);
}
function oneBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns));
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if(tileContainerAll[x].innerHTML == 0 ){
        tileContainerAll[x].innerHTML = 2;
        revalue();
    }else{
        tileContainerAll[x].innerHTML = 2;
        revalue();
        return
    }
    moveBlockOne();
}
function moveBlockOne(){
    time -= 10;
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 1 != platformRows) {
            if (tileContainerAll[(y + 1) * platformColumns + x].innerHTML == 0) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 2;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
randomDrop();
            }
        } else {
            clearInterval(interval);
randomDrop();
        }
    }, 1);
}
function explosion(){
    let array = [];
    tileContainerAll.forEach(box => array.push(box.innerHTML == '' ? 0: parseInt(box.innerHTML)));
    array = array2D(array,platformRows,platformColumns);
    let object = arraytoObject(array);

    for(let row in object){
        let counter = 0;
        for(let i = 0; i < object[row].length; i++){
            if(object[row][i] != 0){
                counter++;
            }
        }
        if(counter == platformColumns){
            for(let i = (row.slice(3)*platformColumns)-1; i > ((row.slice(3)-1)*platformColumns)-1; i--){
                tileContainerAll[i].innerHTML = 0;
            }
            for(let i = ((row.slice(3)-1)*platformColumns)-1; i > 0; i--){
                if(tileContainerAll[i].innerHTML != 0){
                    let tempContainer = tileContainerAll[i].innerHTML;
                    tileContainerAll[i].innerHTML = 0;
                    tileContainerAll[i + platformColumns].innerHTML = tempContainer;
                }
            }
        }
    }
}
function lrightBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns - 1));
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if (
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + 1].innerHTML == 0 &&
        tileContainerAll[x + 1 + platformColumns].innerHTML == 0 &&
        tileContainerAll[x + 1 + platformColumns * 2].innerHTML == 0
    ) {
        tileContainerAll[x].innerHTML = 3;
        tileContainerAll[x + 1].innerHTML = 3;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 3;
        tileContainerAll[x + 1 + platformColumns * 2].innerHTML = 3;
    } else {
        tileContainerAll[x].innerHTML = 3;
        tileContainerAll[x + 1].innerHTML = 3;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 3;
        tileContainerAll[x + 1 + platformColumns * 2].innerHTML = 3;
        console.log("Game Over");
        revalue();
        return false;
    }
    revalue();
    moveBlockLright();
}
function moveBlockLright() {
    time -= 10;
    console.log(time)
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 3 != platformRows) {
            if (
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML == 0 &&
                tileContainerAll[(y + 3) * platformColumns + (x + 1)].innerHTML == 0
            ) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[y * platformColumns + (x + 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 3;
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML = 3;
                tileContainerAll[(y + 2) * platformColumns + (x + 1)].innerHTML = 3;
                tileContainerAll[(y + 3) * platformColumns + (x + 1)].innerHTML = 3;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
randomDrop();
                
        }
        } else {
            clearInterval(interval);
randomDrop();
            
        }
    }, time);
}
function lleftBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns - 1));
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if (
        tileContainerAll[x + 1].innerHTML == 0 &&
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + platformColumns].innerHTML == 0 &&
        tileContainerAll[x + platformColumns * 2].innerHTML == 0
    ) {
        tileContainerAll[x + 1].innerHTML = 4;
        tileContainerAll[x].innerHTML = 4;
        tileContainerAll[x + platformColumns].innerHTML = 4;
        tileContainerAll[x + platformColumns * 2].innerHTML = 4;
    } else {
        tileContainerAll[x + 1].innerHTML = 4;
        tileContainerAll[x].innerHTML = 4;
        tileContainerAll[x + platformColumns].innerHTML = 4;
        tileContainerAll[x + platformColumns * 2].innerHTML = 4;
        console.log("Game Over");
        revalue();
        return false;
    }
    revalue();
    moveBlockLleft();
}
function moveBlockLleft() {
    time -= 10;
    console.log(time)
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 3 != platformRows) {
            if (
                tileContainerAll[(y + 3) * platformColumns + x].innerHTML == 0 &&
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML == 0
            ) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[y * platformColumns + (x + 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML = 4;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 4;
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML = 4;
                tileContainerAll[(y + 3) * platformColumns + x].innerHTML = 4;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
                randomDrop();
            }
        } else {
            clearInterval(interval);
            randomDrop();
        }
    }, time);
}
function zigleftBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns - 2));
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if (
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + 1].innerHTML == 0 &&
        tileContainerAll[x + 1 + platformColumns].innerHTML == 0 &&
        tileContainerAll[x + 2 + platformColumns].innerHTML == 0
    ) {
        tileContainerAll[x].innerHTML = 5;
        tileContainerAll[x + 1].innerHTML = 5;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 5;
        tileContainerAll[x + 2 + platformColumns].innerHTML = 5;
    } 
    else {
        tileContainerAll[x].innerHTML = 5;
        tileContainerAll[x + 1].innerHTML = 5;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 5;
        tileContainerAll[x + 2 + platformColumns].innerHTML = 5;
        console.log("Game Over");
        revalue();
        return false;
    }
    revalue();
    moveBlockZigleft();
}
function moveBlockZigleft() {
    time -= 10;
    console.log(time)
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 2 != platformRows) {
            if (
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML == 0 &&
                tileContainerAll[(y + 2) * platformColumns + (x + 1)].innerHTML == 0 &&
                tileContainerAll[(y + 2) * platformColumns + (x + 2)].innerHTML == 0
            ) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[y * platformColumns + (x + 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + (x + 2)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 5;
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML = 5;
                tileContainerAll[(y + 2) * platformColumns + (x + 1)].innerHTML = 5;
                tileContainerAll[(y + 2) * platformColumns + (x + 2)].innerHTML = 5;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
                randomDrop();            
            }
        } else {
            clearInterval(interval);
            randomDrop();
        }
    }, time);
}
function crownBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns - 1));
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if (
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + platformColumns].innerHTML == 0 &&
        tileContainerAll[x + 1 + platformColumns].innerHTML == 0 &&
        tileContainerAll[x + platformColumns * 2].innerHTML == 0
    ) {
        tileContainerAll[x].innerHTML = 7;
        tileContainerAll[x + platformColumns].innerHTML = 7;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 7;
        tileContainerAll[x + platformColumns * 2].innerHTML = 7;
    } else {
        tileContainerAll[x].innerHTML = 7;
        tileContainerAll[x + platformColumns].innerHTML = 7;
        tileContainerAll[x + 1 + platformColumns].innerHTML = 7;
        tileContainerAll[x + platformColumns * 2].innerHTML = 7;
        console.log("Game Over");
        revalue();
        return false;
    }
    revalue();
    moveBlockCrown();
}
function moveBlockCrown() {
    time -= 10;
    console.log(time)
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 3 != platformRows) {
            if (
                tileContainerAll[(y + 3) * platformColumns + x].innerHTML == 0 &&
                tileContainerAll[(y + 2) * platformColumns + (x + 1)].innerHTML == 0
            ) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 7;
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML = 7;
                tileContainerAll[(y + 3) * platformColumns + x].innerHTML = 7;
                tileContainerAll[(y + 2) * platformColumns + (x + 1)].innerHTML = 7;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
randomDrop();
                
            }
        } else {
            clearInterval(interval);
randomDrop();
            
        }
    }, time);
}
function zigrightBlockCreate(){
    let x = Math.floor(Math.random() * (platformColumns - 2))+1;
    coordinates.x = x;
    coordinates.y = 0;
    blockPosition[0] = x;
    blockPosition[1] = 0;
    if (
        tileContainerAll[x].innerHTML == 0 &&
        tileContainerAll[x + 1].innerHTML == 0 &&
        tileContainerAll[x + platformColumns].innerHTML == 0 &&
        tileContainerAll[x - 1  + platformColumns].innerHTML == 0
    ) {
        tileContainerAll[x].innerHTML = 6;
        tileContainerAll[x + 1].innerHTML = 6;
        tileContainerAll[x + platformColumns].innerHTML = 6;
        tileContainerAll[x -1 + platformColumns].innerHTML = 6;
    } 
    else {
        tileContainerAll[x].innerHTML = 6;
        tileContainerAll[x + 1].innerHTML = 6;
        tileContainerAll[x + platformColumns].innerHTML = 6;
        tileContainerAll[x -1 + platformColumns].innerHTML = 6;
        console.log("Game Over");
        revalue();
        return false;
    }
    revalue();
    moveBlockZigright();
}
function moveBlockZigright() {
    time -= 10;
    console.log(time)
    let interval = setInterval(function () {
        let x = blockPosition[0];
        let y = blockPosition[1];
        if (y + 2 != platformRows) {
            if (
                tileContainerAll[(y + 2) * platformColumns + (x - 1)].innerHTML == 0 &&
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML == 0 &&
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML == 0
            ) {
                tileContainerAll[y * platformColumns + x].innerHTML = 0;
                tileContainerAll[y * platformColumns + (x + 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + (x - 1)].innerHTML = 0;
                tileContainerAll[(y + 1) * platformColumns + x].innerHTML = 6;
                tileContainerAll[(y + 2) * platformColumns + x].innerHTML = 6;
                tileContainerAll[(y + 1) * platformColumns + (x + 1)].innerHTML = 6;
                tileContainerAll[(y + 2) * platformColumns + (x - 1)].innerHTML = 6;
                blockPosition[1] = y + 1;
                revalue();
            } else {
                clearInterval(interval);
randomDrop();
            }
        } else {
            clearInterval(interval);
randomDrop();
        }
    }, time);
}