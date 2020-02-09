function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = [];
  const length = truck_weights.length;
  let current = 0;

  for (let i = 0; i < length; i++) {
    if(truck_weights[i] <= (weight - current)) {
      current += truck_weights[i];
      bridge.push(truck_weights[i]);
      truck_weights.shift();
      console.log(bridge, truck_weights);
    }
  }

  return answer;
}

const truck = [7, 4, 5, 6];

solution(2, 10, truck);
