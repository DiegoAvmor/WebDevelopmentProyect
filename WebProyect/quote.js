var xmlhttp = new XMLHttpRequest();
const app = document.getElementById("root");
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    generateQuote(myObj.author,myObj.content);
  }
};
xmlhttp.open("GET", "https://api.quotable.io/random", true);
xmlhttp.send();

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

    //Holas
}