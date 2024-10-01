import { shuffle } from 'es-toolkit';

const SUITS = Object.freeze(['♠', '♣', '♥', '♦']);
const RANKS = Object.freeze([
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
]);

class BlackzackDeckGenerator {
  static #getBlackzackDeck() {
    return SUITS.flatMap((suit) => RANKS.map((rank) => ({ suit, rank })));
  }

  static generateNewBlackzackDeck() {
    const newBlackzackDeck = this.#getBlackzackDeck();

    const shuffledNewBlackzackDeck = shuffle(newBlackzackDeck);

    return shuffledNewBlackzackDeck;
  }

  /**
   * 1덱이 아닌 여러 덱으로 플레이하고 싶은 경우 사용합니다.
   */
  static generateNewBlackzackDeckMultiple(count) {
    const newBlackzackDecks = Array.from({ length: count }, () =>
      this.#getBlackzackDeck(),
    );

    const shuffledNewBlackzackDeckMultiple = shuffle(newBlackzackDecks.flat());

    return shuffledNewBlackzackDeckMultiple;
  }
}

export { BlackzackDeckGenerator };
