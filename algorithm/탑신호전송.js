function solution(heights) {
  const answer = [];
  let count = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    for (let n = i; n > 0; n--) {
        if(heights[i] < heights[n-1]) {
            answer.push(n);
            break;
        }
    }
    if(answer.length === count) {
        answer.push(0);
    }
    count++;
  }

  answer.reverse();
  return answer;
}

const ary = [1,5,3,6,7,6,5];

const result = solution(ary);

console.log(result);
