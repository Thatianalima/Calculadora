function changeBackgroundImage() {
    // Gera um número aleatório para evitar o cache do navegador
    const randomNumber = Math.floor(Math.random() * 1000);

    // Usa o Picsum para obter uma imagem aleatória
    // O tamanho da imagem é definido como 1920x1080 pixels
    const imageUrl = `https://picsum.photos/1920/1080?random=${randomNumber}`;

    // Define a imagem como fundo do body
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Chama a função quando a página carrega
window.onload = changeBackgroundImage;

function adicionarCaracter(caracter) {
const valorInput = document.querySelector('.display').value

document.querySelector('.display').value = valorInput + caracter

}


function limparTela() {
    document.querySelector('.display').value = ''
}

function calcular() {
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorInput)
}

function inverte() {
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput * -1
}