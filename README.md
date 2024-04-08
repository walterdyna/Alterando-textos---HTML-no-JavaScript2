Manipulação de Elementos HTML com JavaScript

Neste repositório, você encontrará um código JavaScript que demonstra diferentes formas de manipular elementos HTML. Abaixo está uma explicação de cada função utilizada no código:

textContent: Esta propriedade pega todo o conteúdo textual de um elemento, excluindo qualquer marcação HTML.

innerText: Ao contrário do textContent, innerText pega apenas o texto visível dentro do elemento, levando em consideração a aplicação de estilos CSS como ocultar elementos.

innerHTML: Esta propriedade permite adicionar tanto texto quanto HTML ao elemento. Diferentemente do textContent e innerText, innerHTML permite a inserção de marcação HTML dentro do elemento.


Exemplo de Uso

No código fornecido, é selecionado um elemento com a classe .paragraph e manipulado usando a propriedade innerHTML para inserir um novo texto com marcação HTML. Em seguida, são exibidos os resultados de textContent, innerText e innerHTML no console.

const element = document.querySelector(".paragraph")

// Adiciona texto com HTML ao elemento
element.innerHTML = "Texto novo <b>Olá</b>"

// Exibe o conteúdo textual do elemento
console.log(element.textContent)

// Exibe apenas o texto visível do elemento
console.log(element.innerText)

// Exibe o conteúdo completo do elemento, incluindo HTML
console.log(element.innerHTML)


Este código pode ser útil para entender melhor as diferenças entre textContent, innerText e innerHTML ao manipular elementos HTML com JavaScript.