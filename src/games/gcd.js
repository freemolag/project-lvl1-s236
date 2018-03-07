import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } return gcd(b, a % b);
};

const gamePlay = () => {
  const randomNumOne = Math.floor(Math.random() * 100);
  const randomNumTwo = Math.floor(Math.random() * 100);
  const correctAnswer = String(gcd(randomNumOne, randomNumTwo));
  return cons(`${randomNumOne} ${randomNumTwo}`, correctAnswer);
};
const startGcd = () => gameInterface(gameRules, gamePlay);

export default startGcd;
