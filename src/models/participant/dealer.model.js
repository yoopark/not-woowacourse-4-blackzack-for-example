import { Cards } from '@/models/card/cards.model';

class Dealer {
  #cards;

  constructor() {
    this.#cards = new Cards();
  }

  // Player, Dealer -> Participant 추상 클래스로 빼도 될듯?

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
    return this.#cards.score <= 16; // player.checkCanDraw랑 정녕 같은 역할을 한다고 할 수 있을까?
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
}

export { Dealer };
