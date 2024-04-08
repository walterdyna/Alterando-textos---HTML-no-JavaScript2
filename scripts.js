

/*
getElementByID ---> Tras UM elemento pelo ID;
getElementByClassName ---> Tras TODOS os elementos com esta CLASSE;
getElementByTagName ---> Tras TODOS os elementos com esta TAG;
getElementByName ---> tras TODOS os elementos com este NAME.

querySelector ---> Tras UM elemento, o PRIMEIRO que encontrar;
querySelectorAll ---> tras TODOS os elementos que encontrar.

textContent ---> Pega todo o conteudo;
innerText ---> Pega APENAS o texto;
innerHTML ---> Permite adicionar HTML e Texto.
*/


const element = document.querySelector(".paragraph")

// element.textContent = "O Novo texto ´esse" // assim como posso usar o outros para trocar o texto.

element.innerHTML = "Texto novo <b>Olá</b>" // Diferente dos outros o innerHTML ele tras a informação HTML e permite trocar e inserir codigos HTML na sua função.

console.log(element.textContent) //Só mente mostra o HTML;
console.log(element.innerText) // Motra o HTML e leve em conta o CSS;

console.log(element.innerHTML) // Trás TUDO --> Permite adicionar codigo HTML.
