const binary = [];

let division_Number = 0;
let input_Number = prompt("2진수를 구할수를 입력하세요");

const division = (num) => {
    division_Number = num;
    let mok;
    while(division_Number > 0) {
        mok = division_Number % 2;
        binary.push(mok);
        division_Number = Math.floor(division_Number / 2);
    }
}

division(input_Number);

binary.reverse();
console.log(binary);

