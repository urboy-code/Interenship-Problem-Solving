/*
 * Nama: Eka Setiyanto
 * Email: urowncode@gmail.com
 *
 */

function makePalindrome(arr, l, r, k, changed) {
  if (l >= r) {
    return k;
  }

  if (arr[l] !== arr[r]) {
    k--;
    changed[l] = true;
    changed[r] = true;

    if (k < 0) {
      return -1;
    }

    if (arr[l] > arr[r]) {
      arr[r] = arr[l];
    } else {
      arr[l] = arr[r];
    }
  }

  return makePalindrome(arr, l + 1, r - 1, k, changed);
}

function maximizePalindrome(arr, l, r, k, changed) {
  if (l > r) {
    return { arr, k };
  }

  if (l === r) {
    if (k > 0) {
      arr[l] = '9'; 
      k--;
    }
    return { arr, k };
  }

  if (arr[l] < '9') {
    if (!changed[l] && !changed[r]) {
      if (k >= 2) {
        arr[l] = '9';
        arr[r] = '9';
        k -= 2;
      }
    }
    else {
      if (k >= 1) {
        arr[l] = '9';
        arr[r] = '9';
        k--;
      }
    }
  }

  return maximizePalindrome(arr, l + 1, r - 1, k, changed);
}

function solveHighestPalindrome(s, k) {
  const arr = s.split('');
  const n = arr.length;
  const changed = new Array(n).fill(false);

  const k_left = makePalindrome(arr, 0, n - 1, k, changed);

  if (k_left < 0) {
    return '-1';
  }

  const { arr: finalArr } = maximizePalindrome(arr, 0, n - 1, k_left, changed);

  return finalArr.join('');
}

console.log('--- Soal 3: Highest Palindrome ---');

// Input 1 (Sesuai contoh 1)
const s1 = '3943';
const k1 = 1;
console.log(`Input: s="${s1}", k=${k1}`);
console.log(`Output: ${solveHighestPalindrome(s1, k1)}`); // Output: 3993

// Input 2 (Sesuai contoh 2)
const s2 = '932239';
const k2 = 2;
console.log(`Input: s="${s2}", k=${k2}`);
console.log(`Output: ${solveHighestPalindrome(s2, k2)}`); // Output: 992299

// Input 3 (Kasus kustom)
const s3 = '00110';
const k3 = 1;
console.log(`Input: s="${s3}", k=${k3}`);
console.log(`Output: ${solveHighestPalindrome(s3, k3)}`); 
const s4 = '123';
const k4 = 0;
console.log(`Input: s="${s4}", k=${k4}`);
console.log(`Output: ${solveHighestPalindrome(s4, k4)}`); // Output: -1
