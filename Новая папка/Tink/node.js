const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, a;
rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    a = input.split(' ').map(Number);
    console.log(findMaxPrefix(n, a));
    rl.close();
  }
});

function findMaxPrefix(n, a) {
  let freq = new Map();
  let counts = new Map();
  let maxPrefix = 1;

  for (let i = 0; i < n; i++) {
    const x = a[i];
    if (!freq.has(x)) {
      freq.set(x, 1);
    } else {
      freq.set(x, freq.get(x) + 1);
    }

    const f = freq.get(x);
    if (!counts.has(f)) {
      counts.set(f, 1);
    } else {
      counts.set(f, counts.get(f) + 1);
    }

    const c1 = counts.get(f);
    const c2 = counts.get(f - 1) || 0;
    if (c1 * f === i + 1 && c2 * (f - 1) === i + 1 - f) {
      maxPrefix = i + 1;
    }
  }

  return maxPrefix;
}
