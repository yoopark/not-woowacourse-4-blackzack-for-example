import { BlackzackDeckGenerator } from '@/lib/utils/blackzack-deck-generator';
import { Card } from '@/models/card/card.model';

class DeckManager {
  #deck;

  constructor() {
    this.#deck = this.#generateNewDeck();
  }

  #generateNewDeck() {
    const newBlackzackDeck = BlackzackDeckGenerator.generateNewBlackzackDeck();

    return this.#convertBlackzeckDeckToDeck(newBlackzackDeck);
  }

  #convertBlackzeckDeckToDeck(blackzackDeck) {
    return blackzackDeck.map(({ suit, rank }) => new Card(rank, suit));
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
