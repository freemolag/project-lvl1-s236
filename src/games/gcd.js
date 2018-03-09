import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { randomNumber } from '../random';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } return gcd(b, a % b);
};

const generateQuestion = () => {
  const randomNumOne = randomNumber();
  const randomNumTwo = randomNumber();
  const correctAnswer = String(gcd(randomNumOne, randomNumTwo));
  return cons(`${randomNumOne} ${randomNumTwo}`, correctAnswer);
};
const startGcd = () => gameInterface(gameRules, generateQuestion);

export default startGcd;
