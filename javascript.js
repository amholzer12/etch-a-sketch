const canvas = document.querySelector(".canvas")
// hard coding board size for building/testing purposes. will eventually be user input
let size = 16
let isDragging = false
let isErasing = false
const canvasLabel = document.querySelector(".canvasLabel")

// fixes bug when you are clicking the mouse down and drag it out of the canvas before letting go
canvas.addEventListener('mouseleave', (e) => {
    isDragging = false
});

const resize = document.querySelector(".resize");
resize.addEventListener('click', (e) => {
    const newSize = prompt("How many squares per side of your board do you want this time?", "example: 16");
    size = +newSize;
    //using an if statement so code only runs when user input is valid i.e. a number 1-100
    if (size >=1 && size <=100) {
        removeBoard(canvas);
        buildBoard(size);
    }
});

const eraser = document.querySelector(".eraser");
eraser.addEventListener('click', (e) => {
    isErasing = true
})

const marker = document.querySelector(".marker");
marker.addEventListener('click', (e) => {
    isErasing = false
})

const clear = document.querySelector(".clear");
clear.addEventListener('click', (e) => {
    removeBoard(canvas)
    buildBoard(size)
})


function removeBoard(pants) {
    while (pants.firstChild) {
        pants.removeChild(pants.firstChild);
    }
}

function buildBoard(size) {
    const gridSize = size * size
    canvasLabel.textContent = `Etch-a-Sketch (${size}x${size})`;
    for (let i = 0; i < gridSize; i++) {
        //making div element to fill the canvas
        const canvasDiv = document.createElement('div');
        canvasDiv.classList.add("box");
        //take the size of the board (500px) and divide by how many squares you want on each side
        canvasDiv.style.height = `${500/size}px`;
        canvasDiv.style.width = `${500/size}px`;
        //only want to draw when mouse is clicked down AND moving
        canvasDiv.addEventListener('mousedown', (e) => {
            isDragging = true;
            if (isErasing == false) {
                canvasDiv.style.backgroundColor = 'black';
            } else {
                canvasDiv.style.backgroundColor = 'antiquewhite';
            }
        });
        canvasDiv.addEventListener('mouseup', (e) => {
            isDragging = false;
        });
        canvasDiv.addEventListener('mouseover', (e) => {
            if (isDragging == true && isErasing == false) {
                canvasDiv.style.backgroundColor = 'black';
            }
            if (isDragging == true && isErasing == true) {
                canvasDiv.style.backgroundColor = 'antiquewhite'
            }
        });

        canvas.appendChild(canvasDiv);
    }
};

buildBoard(size)
// console.log(canvas)