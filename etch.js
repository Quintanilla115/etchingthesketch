const Default_Color = 'Black'
const Default_Size = '16'

let CurrentColor = Default_Color
let CurrentSize = Default_Size




document.addEventListener('DOMContentLoaded', function() {
    createBoard(CurrentSize)
});


function createBoard(size){
    
    let board = document.querySelector('.board')
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    
    for(let i = 0; i <numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let input = prompt('Enter the size of the board');
    if (input == ""){
        message.innerHTML = ('Please enter a number');
    }

    else if ( input <2 || input > 100){
        alert('Please enter a number between 2 and 100');
        message.innerHTML = ('Enter a number between 2 and 100');
    }
 
    return input;

}


