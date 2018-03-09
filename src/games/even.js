import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import { randomNumber } from '../random';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const generateQuestion = () => {
  const random = randomNumber();
  const answer = random % 2 === 0 ? 'yes' : 'no';
  return cons(`${random}`, answer);
};
const startEven = () => gameLogic(gameRules, generateQuestion);

export default startEven;
