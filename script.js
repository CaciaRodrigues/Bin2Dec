const binaryInputBox = document.getElementById('binary-inputbox'); //Pegando o elemento de input do HTML pelo ID
const decimalResult = document.getElementById('decimal-equiv'); //Pegando o destino do input do HTML pelo ID
const transformBox = document.getElementById('box');

// Evento de submit que envia o valor digitado no input para o campo do decimal

binaryInputBox.addEventListener('submit', (e) => {
    e.preventDefault();

    let binaryNumber = e.target.elements['binary-input'];
    
    // decimalResult.innerHTML = binaryNumber.value;

    transformNumber(binaryNumber);
        
    console.log(binaryNumber.value); 

    binaryNumber.value = "";
    decimalResult.value = "";
})

function transformNumber(number) {
    // Caso o input tenha mais do que 8 dígitos
    if(number.value.length > 8) {
        const invalidLengthMessage = document.createElement('p');
        invalidLengthMessage.classList.add('invalid_message');
        invalidLengthMessage.innerHTML = 'Your entry exceeds our limit of 8 digits! Please try again.';
        transformBox.appendChild(invalidLengthMessage);
    // Caso o input seja diferente de um número binário
    } else if(/[^01]/.test(Number(number.value))){
        const invalidDigMessage = document.createElement('p');
        invalidDigMessage.classList.add('invalid_message');
        invalidDigMessage.innerHTML = 'Your entry is not a binary number! Please enter only binary digits.';
        transformBox.appendChild(invalidDigMessage);
    // Transformando o valor binário em decimal e o colocando dentro do innerHTML do decimal. 
    } else {
        decimalResult.innerHTML = parseInt(number.value, 2);
     }  
}
         