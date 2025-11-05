/*
 * Nama: Eka Setiyanto
 * Email: urowncode@gmail.com
 */

/**
 * @param {number} score 
 * @param {number[]} rankBoard 
 * @returns {number}
 */
function findRank(score, rankBoard) {
  for (let i = 0; i < rankBoard.length; i++) {
    if (score >= rankBoard[i]) {
      return i + 1; 
    }
  }

  return rankBoard.length + 1;
}

/**
 * @param {number[]} leaderboardScores 
 * @param {number[]} gitsScores
 * @returns {string} 
 */
function solveDenseRanking(leaderboardScores, gitsScores) {
  const rankBoard = [...new Set(leaderboardScores)];

  const gitsRanks = [];

  for (const score of gitsScores) {
    const rank = findRank(score, rankBoard);
    gitsRanks.push(rank);
  }

  return gitsRanks.join(' ');
}

console.log('--- Soal 2: Dense Ranking ---');

const leaderboard1 = [100, 100, 50, 40, 40, 20, 10];
const gitsScores1 = [5, 25, 50, 120];
console.log(`Leaderboard: ${leaderboard1.join(' ')}`);
console.log(`GITS Scores: ${gitsScores1.join(' ')}`);
console.log(`Output: ${solveDenseRanking(leaderboard1, gitsScores1)}`); // Output: 6 4 2 1

console.log('--------------------');

// Input 2
const leaderboard2 = [100, 80, 80, 70];
const gitsScores2 = [60, 70, 100];
console.log(`Leaderboard: ${leaderboard2.join(' ')}`);
console.log(`GITS Scores: ${gitsScores2.join(' ')}`);
console.log(`Output: ${solveDenseRanking(leaderboard2, gitsScores2)}`); // Output: 4 3 1

console.log('--------------------');

// Input 3
const leaderboard3 = [100, 100, 100, 50, 25];
const gitsScores3 = [25, 100, 120, 10];
console.log(`Leaderboard: ${leaderboard3.join(' ')}`);
console.log(`GITS Scores: ${gitsScores3.join(' ')}`);
console.log(`Output: ${solveDenseRanking(leaderboard3, gitsScores3)}`); // Output: 3 1 1 4
