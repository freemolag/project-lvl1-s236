import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'What number is missing in this progression?';

const randomNumber = () => Math.floor(Math.random() * 10);

const gamePlay = () => {
  const lengthOfProgression = 10;
  const start = randomNumber();
  const step = randomNumber() + 2;
  const hidden = randomNumber();
  const num = Array(lengthOfProgression).fill(null).map((e, i) => start + (step * i));
  const question = num.map((e, i) => (i === hidden ? '..' : e)).join(' ');
  const answer = String(num[hidden]);
  return cons(question, answer);
};
const startProgression = () => gameInterface(gameRules, gamePlay);

export default startProgression;
