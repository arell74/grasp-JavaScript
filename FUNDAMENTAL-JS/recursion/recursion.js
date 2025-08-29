function tampilAngka(n) {
    if(n === 0) return; //basecase
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10);


function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n-1);
}


function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5));