import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import { randomNumTen } from '../random';

const gameRules = 'What number is missing in this progression?';

// const randomNumber = () => Math.floor(Math.random() * 100);

const generateQuestion = () => {
  const lengthOfProgression = 10;
  const start = randomNumTen();
  const step = randomNumTen() + 2;
  const hidden = randomNumTen();
  const num = Array(lengthOfProgression).fill(null).map((e, i) => start + (step * i));
  const question = num.map((e, i) => (i === hidden ? '..' : e)).join(' ');
  const answer = String(num[hidden]);
  return cons(question, answer);
};
const startProgression = () => gameLogic(gameRules, generateQuestion);

export default startProgression;
