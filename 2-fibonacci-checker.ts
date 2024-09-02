function isFibonacci(num: number): boolean {
    let a = 0;
    let b = 1;
  
    if (num === a || num === b) return true;
  
    let next = a + b;
    while (next <= num) {
      if (next === num) return true;
      a = b;
      b = next;
      next = a + b;
    }
  
    return false;
  }
  
  const numberToCheck = 21;
  
  if (isFibonacci(numberToCheck)) {
    console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numberToCheck} NÃO pertence à sequência de Fibonacci.`);
  }