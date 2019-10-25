const app = document.getElementById("root");
const apiURL = "https://api.quotable.io/random";
//Una vez que se carga la pagina se ejecuta
getQuote();

function getQuote(){
  fetch(apiURL)
    .then((resp) => resp.json()) //Se convierte la respuesta de la peticion a JSON
    .then(function (response) { //Se crea el
        var jsonQuote = response;
        generateQuote(jsonQuote.author,jsonQuote.content);
    })
    .catch(function (err) {
        console.log("No se puedo obtener el recurso", err);
    });
}

//Genera el 'Quote' en la pagina de Inicio
function generateQuote(author,content){
    const quoteContainer = document.createElement('div');
    quoteContainer.setAttribute('class','quoteContainer');

    const quote = document.createElement('p');
    quote.innerHTML = content.replace(/(.{80})/g, "$1<br>");
    const quoteAuthor = document.createElement('h1');
    quoteAuthor.textContent = author;

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteAuthor);
    app.appendChild(quoteContainer);
}