import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import { randomNumber } from '../random';

const gameRules = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  } return true;
};

const generateQuestion = () => {
  const random = randomNumber() + 1;
  const correctAnswer = isPrime(random) ? 'yes' : 'no';
  return cons(random, correctAnswer);
};

const startPrime = () => gameLogic(gameRules, generateQuestion);

export default startPrime;
