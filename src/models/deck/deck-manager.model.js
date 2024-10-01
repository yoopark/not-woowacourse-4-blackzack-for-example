import { Card } from '@/models/card/card.model';
import { shuffle } from 'es-toolkit';

class DeckManager {
  #deck;

  constructor() {
    this.#deck = this.#generateNewDeck();
  }

  #generateNewDeck() {
    const suits = ['♠', '♣', '♥', '♦'];
    const ranks = [
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
    ];

    const newDeck = suits
      .flatMap((suit) => ranks.map((rank) => ({ suit, rank })))
      .map(({ suit, rank }) => new Card(rank, suit));

    // shuffle 하는 건 메소드 바깥으로 빼야 할까 ..?
    const shuffledNewDeck = shuffle(newDeck);

    return shuffledNewDeck;
  }

  draw() {
    if (this.#deck.length === 0) {
      this.#deck = this.#generateNewDeck();
    }

    return this.#deck.pop();
  }

  drawMultiple(count) {
    return Array.from({ length: count }, () => this.draw());
  }
}

export { DeckManager };
