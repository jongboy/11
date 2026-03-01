// 사이드바 명언 위젯 로직
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

const koreanQuotes = [
    { quote: "삶이 있는 한 희망은 있다.", author: "키케로" },
    { quote: "산다는 것 그것은 치열한 전투이다.", author: "로망로랑" },
    { quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.", author: "파울로 코엘료" },
    { quote: "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통과 함께 놀 줄 알아야 한다.", author: "찰리 채플린" },
    { quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.", author: "엘버트 허버드" },
    { quote: "신은 용기 있는 자를 결코 버리지 않는다.", author: "켄러" },
    { quote: "한번의 실패와 영원한 실패를 혼동하지 마라.", author: "F. 스콧 피츠제럴드" },
    { quote: "내일은 내일의 태양이 뜬다.", author: "마가렛 미첼" },
    { quote: "행복은 습관이다. 그것을 몸에 익혀라.", author: "허버드" },
    { quote: "자신감 있는 표정을 지으면 자신감이 생긴다.", author: "찰스 다윈" },
    { quote: "평생 살 것처럼 꿈을 꾸고, 내일 죽을 것처럼 오늘을 살아라.", author: "제임스 딘" }
];

function getQuote() {
    if (!quoteElement || !authorElement) return;
    
    const randomIndex = Math.floor(Math.random() * koreanQuotes.length);
    const selectedQuote = koreanQuotes[randomIndex];
    
    quoteElement.textContent = `"${selectedQuote.quote}"`;
    authorElement.textContent = `- ${selectedQuote.author}`;
}

if (newQuoteButton) {
    newQuoteButton.addEventListener("click", getQuote);
}

// DOM이 완전히 로드된 후 명언 초기화
document.addEventListener("DOMContentLoaded", () => {
    getQuote();
});
