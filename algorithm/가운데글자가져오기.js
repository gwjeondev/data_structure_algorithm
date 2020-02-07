function solution(s) {
    const div = s.length % 2;
    const point = Math.floor(s.length/2);
    return (div ? s[point] : s.substring(point-1,point+1));
}