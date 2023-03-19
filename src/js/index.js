/*
    OBJETIVO - quando clicarmos no botão mostrar a imagem de fundo correspondente
    - passo 1 - pegar o elemento HTML dos botões
    - passo 2 - identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anterior
    - passo 6 - aparecer a imagem correspondente ao botão clicado
*/

// passo 1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtivaDeFundo();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtivaDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
