const list = ['A','B','C','D','E'];

const repetition = prompt('게임 횟수를 입력하세요');

while(list.length > 1) {
    for(let i=0;i<repetition;i++) {
        list.push(list.shift());
    }
    const lose = list.shift();
    console.log(`탈락자는 ${lose}`);
}

console.log(`최종 승자는 ${list[0]}`);