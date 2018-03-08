import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  } return true;
};

const gamePlay = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, correctAnswer);
};

const startPrime = () => gameInterface(gameRules, gamePlay);

export default startPrime;
