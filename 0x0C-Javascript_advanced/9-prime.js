function countPrimeNumbers() {
  let isPrime;
  const primes = [];
  for (let i = 2; i < 101; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) if (i % j === 0) isPrime = false;
    isPrime && primes.push(i);
  }
  return primes;
}
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
