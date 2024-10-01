import App from '@/app';
import { BlackzackDeckGenerator } from '@/lib/utils/blackzack-deck-generator';
import { Console } from '@/lib/utils/console';

const mockAsks = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockGenerateBlackzackDeck = (deck) => {
  jest
    .spyOn(BlackzackDeckGenerator, 'generateNewBlackzackDeck')
    .mockImplementation(() => deck);

  jest
    .spyOn(BlackzackDeckGenerator, 'generateNewBlackzackDeckMultiple')
    .mockImplementation(() => deck);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('블랙잭 게임을 해보아요 ~~', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  it('play 메소드가 존재한다', () => {
    expect(app.play).toBeDefined();
  });

  it('게임 시나리오 1 (딜러 버스트, 플레이어 승리)', async () => {
    // given
    const deck = [
      { suit: '♠', rank: '2' }, // 플레이어
      { suit: '♠', rank: '3' }, // 플레이어
      { suit: '♠', rank: '4' }, // 딜러
      { suit: '♠', rank: 'K' }, // 딜러
      { suit: '♠', rank: 'A' }, // 딜러 (버스트)
    ].reverse(); // 뒤에서부터 주기 때문에, 뒤집어서 넣어주면 앞 카드부터 나온다.
    const answers = [
      'n', // 스탠드
      'n', // 게임 종료
    ];
    const logSpy = getLogSpy();
    const expectedMessages = [
      '블랙잭 게임을 시작합니다.',
      '플레이어가 받은 카드는 2스페이드, 3스페이드입니다.',
      '딜러가 받은 카드는 4스페이드, K스페이드입니다.',
      '플레이어 카드의 합은 5입니다.',
      '딜러가 히트하였습니다.',
      '딜러가 받은 카드는 A스페이드입니다.',
      '딜러가 버스트입니다.',
      'WINNER WINNER CHICKEN DINNER 🍗',
      '블랙잭 게임을 종료합니다.',
      '총 1판하였으며, 1승 0무 0패입니다.',
    ];

    mockGenerateBlackzackDeck(deck);
    mockAsks(answers);

    // when
    await expect(app.play()).resolves.not.toThrow();

    // then
    const actualMessages = logSpy.mock.calls.map((args) => args[0]);

    try {
      expectedMessages.forEach((output, index) => {
        expect(actualMessages[index]).toBe(output);
      });
    } catch (error) {
      console.log('현재 출력: ', actualMessages);
      throw error;
    }
  });

  it('게임 시나리오 2 (플레이어 버스트)', async () => {
    // given
    const deck = [
      { suit: '♠', rank: 'K' }, // 플레이어
      { suit: '♠', rank: 'A' }, // 플레이어
      { suit: '♠', rank: '2' }, // 딜러
      { suit: '♠', rank: '3' }, // 딜러
      { suit: '♠', rank: 'Q' }, // 플레이어 (버스트)
    ].reverse();
    const answers = [
      'y', // 히트
      'n', // 게임 종료
    ];
    const logSpy = getLogSpy();
    const expectedMessages = [
      '블랙잭 게임을 시작합니다.',
      '플레이어가 받은 카드는 K스페이드, A스페이드입니다.',
      '딜러가 받은 카드는 2스페이드, 3스페이드입니다.',
      '플레이어가 받은 카드는 Q스페이드입니다.',
      '플레이어가 버스트입니다.',
      '플레이어가 패배하였습니다 😭',
      '블랙잭 게임을 종료합니다.',
      '총 1판하였으며, 0승 0무 1패입니다.',
    ];

    mockGenerateBlackzackDeck(deck);
    mockAsks(answers);

    // when
    await expect(app.play()).resolves.not.toThrow();

    // then
    const actualMessages = logSpy.mock.calls.map((args) => args[0]);

    try {
      expectedMessages.forEach((output, index) => {
        expect(actualMessages[index]).toBe(output);
      });
    } catch (error) {
      console.log('현재 출력: ', actualMessages);
      throw error;
    }
  });

  it('게임 시나리오 3 (무승부)', async () => {
    // given
    const deck = [
      { suit: '♥', rank: 'K' }, // 플레이어
      { suit: '♥', rank: 'A' }, // 플레이어
      { suit: '♥', rank: 'J' }, // 딜러
      { suit: '♥', rank: '2' }, // 딜러
      { suit: '♥', rank: '9' }, // 딜러 (이후 무승부)
    ].reverse();
    const answers = [
      'n', // 스탠드
      'n', // 게임 종료
    ];
    const logSpy = getLogSpy();
    const expectedMessages = [
      '블랙잭 게임을 시작합니다.',
      '플레이어가 받은 카드는 K하트, A하트입니다.',
      '딜러가 받은 카드는 J하트, 2하트입니다.',
      '플레이어 카드의 합은 21입니다.',
      '딜러가 히트하였습니다.',
      '딜러가 받은 카드는 9하트입니다.',
      '딜러가 스탠드하였습니다.',
      '딜러 카드의 합은 21입니다.',
      '무승부입니다.',
      '블랙잭 게임을 종료합니다.',
      '총 1판하였으며, 0승 1무 0패입니다.',
    ];

    mockGenerateBlackzackDeck(deck);
    mockAsks(answers);

    // when
    await expect(app.play()).resolves.not.toThrow();

    // then
    const actualMessages = logSpy.mock.calls.map((args) => args[0]);

    try {
      expectedMessages.forEach((output, index) => {
        expect(actualMessages[index]).toBe(output);
      });
    } catch (error) {
      console.log('현재 출력: ', actualMessages);
      throw error;
    }
  });
});
