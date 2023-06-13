const buttonsPar = document.getElementsByClassName('btnPar');

for(i = 0; i < buttonsPar.length; i++) {
    buttonsPar[i].addEventListener('click');
}

function alterarCorBtnPar() {
    for (i = 0; i < buttonsPar.length; i++) {
        buttonsPar[i].style.color = "red";
    }
}

function alterarCorInputText() {
    const textInput = document.getElementsByName('nomePessoa')

    textInput[0].style.backgroundColor = 'yellow'
}

function alterarCorButtons() {
    const buttons = document.getElementsByTagName('button');
    
    for(i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'black'
    }
}

function alterarCorLabel() {
    const label = document.getElementById('lbl')

    label.style.color = 'pink'
}

function alterarCorPrimeiroButton() {
    const firstButton = document.querySelector('.btnImpar')

    firstButton.style.color = 'white'
}
