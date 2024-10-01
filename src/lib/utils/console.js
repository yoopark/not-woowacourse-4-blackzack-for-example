import readlinePromises from 'node:readline/promises';

/**
 * @See {@link https://github.com/woowacourse-projects/javascript-mission-utils/blob/main/src/console.js}
 */
class Console {
  static print(message) {
    console.log(message);
  }

  static async readLineAsync(query) {
    const rlp = readlinePromises.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await rlp.question(query);

    rlp.close();

    return answer;
  }
}

export { Console };
