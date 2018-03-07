import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const gamePlay = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const isEvenNumber = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(`${randomNumber}`, isEvenNumber);
};
const startEven = () => gameInterface(gameRules, gamePlay);

export default startEven;
