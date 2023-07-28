const binaryInputBox = document.getElementById('binary-inputbox'); //Pegando o elemento de input do HTML pelo ID
const decimalResult = document.getElementById('decimal-equiv'); //Pegando o destino do input do HTML pelo ID

// Evento de submit que envia o valor digitado no input para o campo do decimal

binaryInputBox.addEventListener('submit', (e) => {
    e.preventDefault();

    let binaryNumber = e.target.elements['binary-input'];
    
    // decimalResult.innerHTML = binaryNumber.value;

    transformNumber(binaryNumber);
        
    console.log(binaryNumber.value); 

    binaryNumber.value = "";
})

function transformNumber(number) {
    // Transformando o valor binário em decimal e o colocando dentro do innerHTML do decimal. 
    decimalResult.innerHTML = parseInt(number.value, 2);
}