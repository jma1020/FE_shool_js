const aespa = ["카리나", "윈터", "지젤", "닝닝"];

aespa.forEach((item, index) => {
    aespa[index] = item + '💖';
});

console.log(aespa);
//원본 데이터를 건들여서 만약에 필요하면 어떻게 하냐고~

const aespa2 = aespa.map((item) => {
    return item + '💖'
});

console.log(aespa2);
console.log(aespa);
//불편하는 거처럼 다루기
