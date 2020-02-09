function solution(arr) {
    return arr.filter((c,i,a)=> c !== a[i+1]);
  }
  
solution([1, 1, 3, 3, 0, 1, 1]);
  