/*
 * Nama: Eka Setiyanto
 * Email: urowncode@gmail.com
 */

function solveA000124(n) {
  
  if (n <= 0) {
    return "";
  }

  let results = [];
  let currentValue = 1; 

  for (let i = 0; i < n; i++) {
    if (i > 0) {
        currentValue = currentValue + i;
    }
    
    results.push(currentValue);
  }

  return results.join('-');
}

console.log("--- Soal 1: Sloane's OEIS A000124 ---");

// Input 1 (Sesuai contoh)
const input1 = 7;
console.log(`Input: ${input1}`);
console.log(`Output: ${solveA000124(input1)}`); // Output: 1-2-4-7-11-16-22

// Input 2
const input2 = 5;
console.log(`Input: ${input2}`);
console.log(`Output: ${solveA000124(input2)}`); // Output: 1-2-4-7-11

// Input 3
const input3 = 10;
console.log(`Input: ${input3}`);
console.log(`Output: ${solveA000124(input3)}`); // Output: 1-2-4-7-11-16-22-29-37-46