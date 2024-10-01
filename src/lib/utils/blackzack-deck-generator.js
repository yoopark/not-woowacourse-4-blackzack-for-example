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
  static generateNewBlackzackDeck() {
    const newBlackzackDeck = SUITS.flatMap((suit) =>
      RANKS.map((rank) => ({ suit, rank })),
    );

    const shuffledNewBlackzackDeck = shuffle(newBlackzackDeck);

    return shuffledNewBlackzackDeck;
  }
}

export { BlackzackDeckGenerator };
