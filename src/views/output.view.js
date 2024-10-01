import { Console } from '@/lib/utils/console';

class OutputView {
  static #print(message) {
    Console.print(message);
  }

  static #printReceiveCards(name, cards) {
    const cardString = cards.map((card) => card.toKoreanString()).join(', ');

    this.#print(`${name}가 받은 카드는 ${cardString}입니다.`);
  }

  static #printAction(name, action) {
    this.#print(`${name}가 ${action}하였습니다.`);
  }

  static #printBust(name) {
    this.#print(`${name}가 버스트입니다.`);
  }

  static #printSumOfCards(name, sum) {
    this.#print(`${name} 카드의 합은 ${sum}입니다.`);
  }

  static #printPlayerWin() {
    this.#print('WINNER WINNER CHICKEN DINNER 🍗');
  }

  static #printPlayerDraw() {
    this.#print('무승부입니다.');
  }

  static #printPlayerLose() {
    this.#print('플레이어가 패배하였습니다 😭');
  }

  static printStartGame() {
    this.#print('블랙잭 게임을 시작합니다.');
  }

  static printPlayerReceiveCards(cards) {
    this.#printReceiveCards('플레이어', cards);
  }

  static printDealerReceiveCards(cards) {
    this.#printReceiveCards('딜러', cards);
  }

  static printDealerAction(action) {
    this.#printAction('딜러', action);
  }

  static printPlayerBust() {
    this.#printBust('플레이어');
  }

  static printDealerBust() {
    this.#printBust('딜러');
  }

  static printSumOfDealerCards(sum) {
    this.#printSumOfCards('딜러', sum);
  }

  static printSumOfPlayerCards(sum) {
    this.#printSumOfCards('플레이어', sum);
  }

  static printPlayerResult(result) {
    switch (result) {
      case 'win':
        this.#printPlayerWin();
        break;
      case 'draw':
        this.#printPlayerDraw();
        break;
      case 'lose':
        this.#printPlayerLose();
        break;
      default:
        throw new Error('지원하지 않는 결과 값입니다.');
    }
  }

  static printEndGame() {
    this.#print('블랙잭 게임을 종료합니다.');
  }

  static printFinalResult(winCount, drawCount, loseCount) {
    const totalGameCount = winCount + drawCount + loseCount;

    this.#print(
      `총 ${totalGameCount}판하였으며, ${winCount}승 ${drawCount}무 ${loseCount}패입니다.`,
    );
  }
}

export { OutputView };
