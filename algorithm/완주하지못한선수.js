function solution(participant, completion) {
  let a = completion.reduce((obj, z) => {
    // 완주자 명단을 hash함.
    if (obj[z]) {
      // 속성이 있는지 없는지 검사(여기서 속성이름은 완주자 이름)
      obj[z] += 1; // 있을경우 동명이인임. 값을 obj[z] += 1함.
    } else {
      obj[z] = 1; // 없을경우(undefined === falsy) obj[z] = 1;
    }
    return obj;
  }, {});
  return participant.find(z => {
    // 참가자 명단을 find 메서드를 통해 순환
    if (a[z]) {
      // 완주자 명단에 참가자가 있는지 검사(완주자 명단은 a객체이며 z는 참가자 명단의 요소) 즉 a[z]가 true일 경우 참가자가 완주자 명단에 있다는 것. 이 경우도 동명이인이 있을 경우 -= 1한다.
      a[z] -= 1;
    } else {
      // false 일 경우 0 아니면 undefined임. 즉 완주자가 동명이인 일 경우 0이 될것이고 완주자가 없을 경우 1번 reduce에서 값 자체를 할당하지 않음으로 undefined임.
      return true;
    }
  });
}
