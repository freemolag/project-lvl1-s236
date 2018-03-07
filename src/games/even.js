import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const gamePlay = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(`${randomNumber}`, answer);
};
const startEven = () => gameInterface(gameRules, gamePlay);

export default startEven;
