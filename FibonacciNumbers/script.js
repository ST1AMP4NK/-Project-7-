// 1. Оголошуємо "генератор" - функцію, що може призупиняти своє виконання

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