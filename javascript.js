const canvas = document.querySelector(".canvas")
// hard coding board size for building/testing purposes. will eventually be user input.
const size = 16

function buildBoard(size) {
    const gridSize = size * size

    for (let i = 0; i < gridSize; i++) {
        //making div element to fill the canvas
        const canvasDiv = document.createElement('div');
        canvasDiv.classList.add("box");
        //take the size of the board (500px) and divide by how many squares you want on each side
        canvasDiv.style.height = `${500/size}px`;
        canvasDiv.style.width = `${500/size}px`;
        canvasDiv.addEventListener('mouseover', (e) => {
            canvasDiv.style.backgroundColor = 'black'
        })

        canvas.appendChild(canvasDiv);

    }



};

buildBoard(size)
console.log(canvas)