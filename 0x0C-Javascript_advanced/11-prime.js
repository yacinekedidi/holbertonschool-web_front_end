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

setTimeout(function () {
  console.log(
    `Execution time of calculating prime numbers 100 times was ${
      t1 - t0
    } milliseconds.`
  );
}, 0);
const t0 = performance.now();
for (let i = 0; i < 100; i++) countPrimeNumbers();
const t1 = performance.now();
