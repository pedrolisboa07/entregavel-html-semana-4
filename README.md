# Arrays, DOM e Eventos

Projeto desenvolvido em JavaScript para praticar arrays, manipulação do DOM e eventos.

## Arrays

* **forEach:** percorre todos os elementos de um array.
* **map:** cria um novo array a partir dos elementos.
* **filter:** cria um novo array apenas com os elementos que atendem a uma condição.
* **reduce:** percorre os elementos e retorna um único valor.

## DOM

Foi utilizado `querySelector` e `querySelectorAll` para selecionar elementos da página.

Também foram utilizados:

* `textContent`
* `innerHTML`
* `createElement`
* `append`
* `classList.add`
* `classList.contains`

## Eventos

Foram utilizados eventos de:

* `click`
* `mouseover`
* `keyup`
* `submit`

No formulário foi utilizado `preventDefault()` para impedir o recarregamento da página.

## Event Delegation

O Event Delegation foi utilizado colocando apenas um evento de `click` na lista.

Quando um `<li>` é clicado, o código verifica `e.target` e altera a classe do item.

Isso também permite que itens criados posteriormente pelo JavaScript funcionem com o mesmo evento.

## Como executar

Abra o arquivo `index.html` no navegador e abra o Console com `F12` para visualizar os resultados.
