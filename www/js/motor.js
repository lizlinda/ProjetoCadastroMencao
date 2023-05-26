var nome 
var selecao
var selecaodisciplina
var selecaomensao

function cadastrar(){
    nome = document.getElementById('inputnome').value
    document.getElementById('nomealuno').textContent = nome

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    selecao = document.getElementById('mencao')
    selecaomensao = selecao.options[selecao.selectedIndex].value

    localStorage.setItem(selecaodisciplina, selecaomensao)
}

function listar(){
    var  exibirmensao

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    exibirmensao = localStorage.getItem(selecaodisciplina)

    document.getElementById('exibirdisciplina').textContent = selecaodisciplina
    document.getElementById('exibirmensao').textContent = exibirmensao
}