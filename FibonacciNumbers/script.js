function* fibonacciGenerator() {
    let current = 0;
    let next = 1;

    yield current; 
    yield next;   

    while (true) {
        let temp = current + next;
        current = next;
        next = temp;
        yield next; 
    }
}

const display = document.getElementById('result-display');
const button = document.getElementById('next-number-btn');

const fibSequence = fibonacciGenerator();

function showNextFibonacci() {

    const nextNumber = fibSequence.next().value;

    display.textContent = nextNumber;
}

button.addEventListener('click', showNextFibonacci);
const piString = "3.1415926535897932384626433832795";

let piIndex = 1;

const piDisplay = document.getElementById('pi-display');
const piButton = document.getElementById('next-pi-btn');

function showNextPiDigit() {
    if (piIndex <= piString.length) {
        const piSubstring = piString.substring(0, piIndex);
        piDisplay.textContent = piSubstring;
        piIndex++;
    } else {
        piIndex = 1;
        piDisplay.textContent = "...";
    }
}

piButton.addEventListener('click', showNextPiDigit);