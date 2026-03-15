const botao = document.querySelector('.botaoEnviar');
const campoResultado = document.querySelector('.listaDeResultados');
const criarUl = document.createElement('ul');
campoResultado.appendChild(criarUl);

function criarLista(textoTarefa) {

    const campoInput = document.querySelector('.campoUsuário').value;
    const criarLi = document.createElement('li');
    const campoInputVazio = document.querySelector('.campoUsuário');

    const criarBotaoLi = document.createElement('button');
    criarBotaoLi.classList.add('botaoApagar');

    criarBotaoLi.addEventListener('click', function () {
        const tarefaParaRemover = criarBotaoLi.parentElement;

        tarefaParaRemover.remove();
        salvarTarefas();
    });

    const valorFinal = textoTarefa || campoInput;


    if (!valorFinal || valorFinal.trim() === '') {
        return campoInputVazio.classList.add('campoVazio');
    } else {
        campoInputVazio.classList.remove('campoVazio');

        criarLi.textContent = valorFinal;

        criarUl.appendChild(criarLi);
        criarLi.appendChild(criarBotaoLi);
        criarBotaoLi.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'

        document.querySelector('.campoUsuário').value = '';
        document.querySelector('.campoUsuário').focus();
        salvarTarefas();
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

function salvarTarefas() {
    const liTarefas = criarUl.querySelectorAll('li');
    const arrayTarefas = [];

    for (let tarefa of liTarefas) {
        const texto = tarefa.firstChild?.textContent?.trim() || '';
        if (texto) arrayTarefas.push(texto);
    }

    const tarefasJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    if (!tarefas) return;

    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criarLista(tarefa);
    }
}

adicionarTarefasSalvas();
