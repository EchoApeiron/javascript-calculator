document.addEventListener('DOMContentLoaded',  () => {
    const calculator = document.querySelector('.calculator'); 
    const calcDisplay = document.querySelector('.calc__display'); 
    const calcKeys = document.querySelector('.calc__keypad');

    calcKeys.addEventListener('click', evt => {
        let key = evt.target;
        let keyContent = key.textContent; 
        let display = calcDisplay.textContent; 
        let action = key.dataset.action;

        switch(action) {
            case 'add':
                calcDisplay.textContent += '+';
                break; 
            case 'subtract':
                calcDisplay.textContent += '-';
                break;
            case 'multiply':
                calcDisplay.textContent += '*';
                break;
            case 'divide':
                calcDisplay.textContent += '/';
                break;
            case 'number':
                (display === '0') ? calcDisplay.textContent = keyContent : calcDisplay.textContent += keyContent; 
                break;
            case 'decimal':
                calcDisplay.textContent += '.'
                break;
            case 'clear':
                calcDisplay.textContent = '0'; 
                key.blur();
                break;
            case 'equals':
                let total = eval(display); 
                calcDisplay.textContent = total; 
                key.blur(); 
                break;
        }
    }); 
});