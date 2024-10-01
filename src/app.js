import { Console } from '@/lib/utils/console';
import { BlackzackDeckGenerator } from './lib/utils/blackzack-deck-generator';

class App {
  async play() {
    const blackzackDeck = BlackzackDeckGenerator.generateNewBlackzackDeck();

    let answer = await Console.readLineAsync('몇 장의 카드를 뽑을까요? : ');
    answer = Number(answer);

    if (Number.isNaN(answer)) {
      Console.print('숫자를 입력해주세요.');
      return;
    }

    if (answer < 1) {
      Console.print('1 이상의 숫자를 입력해주세요.');
      return;
    }

    Console.print(blackzackDeck.slice(0, answer));
  }
}

export default App;
