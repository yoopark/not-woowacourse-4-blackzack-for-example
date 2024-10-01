import { BlackjackController } from '@/controllers/blackjack.controller';

class App {
  #blackjackController;

  constructor() {
    this.#blackjackController = new BlackjackController();
  }

  async play() {
    await this.#blackjackController.run();
  }
}

export default App;
