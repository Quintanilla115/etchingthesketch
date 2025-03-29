document.addEventListener('DOMContentLoaded', function() {
    createBoard(16)

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    });


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



