var nome 
var selecao
var selecaodisciplina

function cadastrar(){
    nome = document.getElementById('inputnome').value
    document.getElementById('nomealuno').textContent = nome

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value
}
