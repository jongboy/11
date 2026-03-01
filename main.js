
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        quoteElement.textContent = "An error occurred while fetching the quote.";
        authorElement.textContent = "";
    }
}

newQuoteButton.addEventListener("click", getQuote);

getQuote();
