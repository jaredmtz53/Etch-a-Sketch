const grid = document.getElementById('grid');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
let timeoutId;


 
function updateSize() {
    
    sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
    clearTimeout(timeoutId);
    timeoutId = setTimeout( () => {
        showgrid(sizeSlider.value);
    }, 600);
    }

sizeSlider.addEventListener('input', updateSize);


showgrid(16)



function showgrid(size) {
    squares = grid.querySelectorAll('div');
    squares.forEach((div) =>  div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for( let i = 0; i < size * size; i++ ) {
        const cells = document.createElement('div');
        cells.addEventListener('mouseover', colorchange);
        cells.style.backgroundColor = "white";
        grid.appendChild(cells);
    }
}

let rainbowBtnClicked = false;
let eraserBtnClicked = false;
let clearBtnClicked = false;
let colorBtnClicked = false;


function colorchange() {
    if (rainbowBtnClicked) {
        const randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        this.style.backgroundColor = randomColor;
    }
    else if (eraserBtnClicked) {
        this.style.backgroundColor = "white";
    }
    else if (colorBtnClicked) {
        this.style.backgroundColor = colorPicker.value;
    }
}


clearBtn.addEventListener('click', () => {
    showgrid(sizeSlider.value);
    rainbowBtnClicked = false;
    eraserBtnClicked = false;
    clearBtnClicked = true;
    colorBtnClicked = false;
    
})

colorBtn.addEventListener('click', () => {
    rainbowBtnClicked = false;
    eraserBtnClicked = false;
    clearBtnClicked = false;
    colorBtnClicked = true;
})

rainbowBtn.addEventListener('click', () => {
    rainbowBtnClicked = true;   
    eraserBtnClicked = false;
    clearBtnClicked = false;
    colorBtnClicked = false;
})

eraserBtn.addEventListener('click', () => {
    eraserBtnClicked = true;
    rainbowBtnClicked = false;
    clearBtnClicked = false;
    colorBtnClicked = false;
})


