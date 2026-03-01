
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function getQuote() {
    try {
        const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
        const data = await response.json();
        const quoteData = JSON.parse(data.contents)[0];
        quoteElement.textContent = `"${quoteData.q}"`;
        authorElement.textContent = `- ${quoteData.a}`;
    } catch (error) {
        quoteElement.textContent = "An error occurred while fetching the quote.";
        authorElement.textContent = "";
    }
}

newQuoteButton.addEventListener("click", getQuote);

getQuote();
