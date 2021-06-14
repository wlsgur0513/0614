// 단일 객체 내보내기
function sum(a: any, b: any): any
 {
    return a + b;
  }
  
  function sub(a: any, b: any): number
  {
    return a - b;
  }
  
  function multiply(a: any, b: any): number
  {
    return a * b;
  }
  
  function divide(a: any, b: any): number
 {
    if (b === 0) throw new Error("0으로 숫자를 나눌 수 없습니다.");
    return a / b;
  }
  
  
  export default {
    sum,
    sub,
    multiply,
    divide
  }
  