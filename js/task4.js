let counterValue = 0;

const decrButRef = document.querySelector('[data-action="decrement"]');
const incrButRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
decrButRef.addEventListener("click", decrement);
incrButRef.addEventListener("click", increment);

function decrement(){
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

function increment(){
    counterValue += 1;
    valueRef.textContent = counterValue;
}