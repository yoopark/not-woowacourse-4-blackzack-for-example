class Card {
  /**
   * rank와 suit로 네이밍한 이유에 대한 설명
   * @See {@link https://www.cs.umd.edu/class/spring2020/cmsc132-030X-040X-050X/132Spring20Proj1/playingCard.html}
   */
  #rank;
  #suit;

  constructor(rank, suit) {
    this.#rank = rank; // '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    this.#suit = suit; // '♠', '♣', '♥', '♦'
  }

  get rank() {
    return this.#rank;
  }

  #convertSuitToKoreanString(suit) {
    switch (suit) {
      case '♠':
        return '스페이드';
      case '♣':
        return '클로버';
      case '♥':
        return '하트';
      case '♦':
        return '다이아몬드';
      default:
        throw new Error('지원하지 않는 문양입니다.');
    }
  }

  toKoreanString() {
    const suitKoreanString = this.#convertSuitToKoreanString(this.#suit);
    return `${this.#rank}${suitKoreanString}`;
  }

  get suit() {
    return this.#suit;
  }

  get value() {
    switch (this.#rank) {
      case 'A':
        return 11;
      case 'J':
      case 'Q':
      case 'K':
        return 10;
      default:
        return Number(this.#rank); // TODO: 2 ~ 10 아닌 경우 예외 처리
    }
  }
}

export { Card };
