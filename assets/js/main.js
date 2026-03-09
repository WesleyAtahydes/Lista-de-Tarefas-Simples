const botao = document.querySelector('.botaoEnviar');
const CampoResultado = document.querySelector('.listaDeResultados');
const criarUl = document.createElement('ul');

function criarLista() {

    const campoInput = document.querySelector('.campoUsuário').value;
    const CriarLi = document.createElement('li');
    

    const CriarBotaoLi = document.createElement('button');
    CriarBotaoLi.classList.add('botaoApagar');

    CriarBotaoLi.addEventListener('click', function () {
        const TarefaParaRemover = CriarBotaoLi.parentElement;

        TarefaParaRemover.remove();
    });


    if (campoInput === '') {
        return alert('PREENCHA O CAMPO!!')
    } else {

        CriarLi.textContent = campoInput;

        criarUl.appendChild(CriarLi);
        CriarLi.appendChild(CriarBotaoLi);
        CriarBotaoLi.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'

        CampoResultado.appendChild(criarUl);
        document.querySelector('.campoUsuário').value = '';
    }

}

botao.addEventListener('click', function () {
    criarLista();
});

const campoInput = document.querySelector('.campoUsuário');

campoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        criarLista();
    }
});



