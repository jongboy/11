const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// API 호출 실패 시 보여줄 기본 명언들
const fallbackQuotes = [
    { quote: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 계속하려는 용기다.", author: "윈스턴 처칠" },
    { quote: "어제보다 나은 내일을 만드는 유일한 방법은 오늘 최선을 다하는 것이다.", author: "익명" },
    { quote: "계획 없는 목표는 단지 소망에 불과하다.", author: "생텍쥐페리" }
];

async function getQuote() {
    try {
        // DummyJSON API는 CORS 설정이 잘 되어 있어 프록시 없이도 안정적입니다.
        const response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) throw new Error("API response was not ok");
        
        const data = await response.json();
        quoteElement.textContent = `"${data.quote}"`;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        console.error("API Error:", error);
        // 오류 발생 시 로컬 명언 중 하나를 랜덤으로 표시
        const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
        const fallback = fallbackQuotes[randomIndex];
        quoteElement.textContent = `"${fallback.quote}"`;
        authorElement.textContent = `- ${fallback.author}`;
    }
}

newQuoteButton.addEventListener("click", getQuote);

// 페이지 로드 시 첫 명언 불러오기
getQuote();
