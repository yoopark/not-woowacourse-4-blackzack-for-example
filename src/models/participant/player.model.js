import { Cards } from '@/models/card/cards.model';

class Player {
  #winCount;
  #drawCount;
  #loseCount;
  #cards;

  constructor() {
    this.#winCount = 0;
    this.#drawCount = 0;
    this.#loseCount = 0;
    this.#cards = new Cards();
  }

  // 지금 cards 내의 메서드를 일일이 감싸고 있는데, 쓸모없는 중복인 듯 ...
  // 그냥 cards를 반환하고 꺼낸 쪽에서 알아서 처리하게 하는 방법은 어떨까?

  addCard(card) {
    this.#cards.add(card);
  }

  addCards(cards) {
    cards.forEach((card) => this.addCard(card));
  }

  checkIsBust() {
    return this.#cards.checkIsBust();
  }

  checkCanDraw() {
    return !this.#cards.checkIsBust();
  }

  resetCards() {
    this.#cards.reset();
  }

  get cards() {
    return this.#cards.cards;
  }

  get score() {
    return this.#cards.score;
  }

  #increaseWinCount() {
    this.#winCount++;
  }

  #increaseDrawCount() {
    this.#drawCount++;
  }

  #increaseLoseCount() {
    this.#loseCount++;
  }

  updateResult(result) {
    switch (result) {
      case 'win':
        this.#increaseWinCount();
        break;
      case 'draw':
        this.#increaseDrawCount();
        break;
      case 'lose':
        this.#increaseLoseCount();
        break;
      default:
        throw new Error('지원하지 않는 결과 값입니다.');
    }
  }

  get winCount() {
    return this.#winCount;
  }

  get drawCount() {
    return this.#drawCount;
  }

  get loseCount() {
    return this.#loseCount;
  }
}

export { Player };
