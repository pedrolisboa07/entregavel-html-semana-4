console.log("===== BLOCO 1 - ARRAYS =====");

const nomes = ["Pedro", "Joao", "Maria"];

nomes.forEach(function(nome) {
console.log("Ola, " + nome + "!");
});

const nomesMaiusculos = nomes.map(function(nome) {
return nome.toUpperCase();
});

console.log("Nomes em maiusculo:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(function(preco) {
return preco > 20;
});

const somaPrecos = precos.reduce(function(total, preco) {
return total + preco;
}, 0);

console.log("Precos acima de 20:", precosAcimaDe20);
console.log("Soma dos precos:", somaPrecos);

const produtos = [
{ nome: "Caderno", preco: 15 },
{ nome: "Caneta", preco: 5 },
{ nome: "Mochila", preco: 80 }
];

const nomesProdutos = produtos.map(function(produto) {
return produto.nome;
});

const produtosBaratos = produtos.filter(function(produto) {
return produto.preco < 50;
});

const totalProdutos = produtos.reduce(function(total, produto) {
return total + produto.preco;
}, 0);

produtos.forEach(function(produto) {
console.log(produto.nome + ": R$ " + produto.preco);
});

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos abaixo de R$ 50:", produtosBaratos);
console.log("Total dos produtos:", totalProdutos);

console.log("===== BLOCO 2 - DOM =====");

const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Pedro";

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
console.log("Paragrafo:", paragrafo.textContent);
});

const lista = document.querySelector("#lista");

lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);

terceiroItem.classList.add("destaque");

console.log(
"Possui destaque:",
terceiroItem.classList.contains("destaque")
);

const tarefas = [
"Estudar JS",
"Fazer exercicios",
"Revisar DOM"
];

tarefas.forEach(function(tarefa) {
const item = document.createElement("li");
item.textContent = tarefa;
lista.append(item);
});

const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");

console.log(
"Quantidade de itens:",
lista.querySelectorAll("li").length
);

console.log("===== BLOCO 3 - EVENTOS =====");

const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
console.log("Clicou!");
});

botao.addEventListener("mouseover", function() {
botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
console.log("Nome digitado:", campoNome.value);
});

lista.addEventListener("click", function(e) {

```
if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
}
```

});

const novoItem = document.createElement("li");

novoItem.textContent = "Item criado pelo JavaScript";

lista.append(novoItem);

const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function(e) {

```
e.preventDefault();

const texto = campoTarefa.value.trim();

if (texto === "") {
    return;
}

const item = document.createElement("li");

item.textContent = texto;

lista.append(item);

campoTarefa.value = "";
```

});

console.log("===== FIM DO PROGRAMA =====");
