const binaryInputBox = document.getElementById('binary-inputbox'); // Elemento de input do HTML pelo ID
const decimalResult = document.getElementById('decimal-equiv'); // Destino do input do HTML pelo ID
const mensagemErro = document.getElementById('invalid_message'); // Campo da mensagem de erro

// Evento de submit que envia o valor digitado no input para o campo do decimal
binaryInputBox.addEventListener('submit', (e) => {
    e.preventDefault();

    let binaryNumber = e.target.elements['binary-input'];

    transformNumber(binaryNumber);
        
    console.log(binaryNumber.value); 

    binaryNumber.value = "";
})

function transformNumber(number) {
    // Caso o input tenha mais do que 8 dígitos ou seja diferente de um número binário
    if(number.value.length > 8 || /[^01]/.test(Number(number.value))) {
        mensagemErro.style.display = "block";
        mensagemErro.innerHTML = 'Your entry exceeds our limit of 8 digits or is not a binary number! Please try again.';
        decimalResult.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>'
    // Caso o usuário tente enviar sem ter digitado nenhum número
    } else if(number.value == ""){
        mensagemErro.style.display = 'block';
        mensagemErro.innerHTML = "No number has been entered, please try again.";
        decimalResult.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
    // Transformando o valor binário em decimal e o colocando dentro do innerHTML do decimal. 
    } else {
        decimalResult.innerHTML = parseInt(number.value, 2);
        mensagemErro.style.display = "none";
     }  
}
         