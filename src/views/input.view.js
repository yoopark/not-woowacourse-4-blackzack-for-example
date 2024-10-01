import { Console } from '@/lib/utils/console';

class InputView {
  static async #ask(query) {
    return await Console.readLineAsync(query);
  }

  // askHitOrStand?
  static async askWantsToDraw() {
    const answer = await this.#ask('카드를 더 받으시겠습니까? (y/n) : ');

    return answer === 'y'; // TODO: y/n 이외의 값이 들어올 경우 처리
  }

  static async askWantsToPlay() {
    const answer = await this.#ask('게임을 계속하시겠습니까? (y/n) : ');

    return answer === 'y'; // TODO: y/n 이외의 값이 들어올 경우 처리
  }
}

export { InputView };
