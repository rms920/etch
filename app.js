const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs(col, rows) {
    for(let i = 0 ; i < (col * rows); i++){
        const div = document.createElement('div')        
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')     
    }
}

createDivs(16,16)

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))
        
    })
 
    buttonsContainer.appendChild(btnGray).classList.add('btn')
   
}


function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
        
    })
 
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
   
}


function rgbColor() {
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'Random'
    btnRGB.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${G},${B})`
        }))
        
    })
 
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
   
}

function reset() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function reSize() {
    btnSize.textContent = 'Grid size'
    btnSize.addEventListener('click', () => {
        let user = prompt('What grid size?')
        if(user === null || user < 1) {
            reset()
            createDivs(16,16)
            addButtons()
        }else if (user > 100){
            alert('try again but pick a number less than 100');
        }
        else {
            reset()
            createDivs(user,user)
            addButtons()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()


function addButtons() {
    blackColor();
    grayColor();
    rgbColor();
}

addButtons()
