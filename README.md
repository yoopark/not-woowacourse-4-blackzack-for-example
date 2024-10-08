# 구현과제 4. Blackzack

> 이 과제는 [우아한테크코스 웹 프론트엔드 프리코스 미션 - 숫자 야구](https://github.com/woowacourse-precourse/javascript-baseball-6), [우아한테크코스 백엔드 미션 - 블랙잭](https://github.com/woowacourse/java-blackjack)을 모티브로 제작되었습니다.

## 유의사항

**읽기 좋은 코드**에 집중해주세요.

- 기능의 정상 동작 여부
- 작성하는 코드의 퀄리티
- Git 관리 수준
- PR, 코드 리뷰 방식

최소 기능 구현만 만족하면 **자유롭게 커스텀**이 가능합니다.

- 폴더 구조 커스텀 가능
- 코드 컨벤션 커스텀 가능
- 의존성 설치 및 삭제 가능

**README 작성**은 필수입니다.

- 자신의 코드에서 강조할 부분
- 자신의 코드에서 부족한 부분
- 기타 코드를 이해하는데 도움을 주는 내용

Fork & PR 등 과제 진행과 관련된 내용은,  
 [우테코 따라잡기 2 노션 - 구현과제 진행 관련 유의사항](https://yopark.notion.site/2386b22b37b643c5ac67a6db8350e027) 문서를 참고해주세요.

## 구현해야 할 기능

> Blackzack 시연 레포 : https://github.com/yoopark/not-woowacourse-4-blackzack-for-example

컴퓨터를 딜러로 하는 **블랙잭** 게임을 제작해야 합니다.

브라우저가 아니라 노드 환경에서 실행되는 프로그램입니다. (콘솔을 통해 소통)

다음의 **간소화된 블랙잭 룰**을 따릅니다.

> 간소화된 블랙잭 룰은 실제 블랙잭 룰과 _다릅니다_.  
> 차이점이 궁금하다면, [우테코 따라잡기 2 노션 - 실제 블랙잭 룰과의 차이](https://yopark.notion.site/112e2b27d9bc80bb91d6cd2b99900a9b) 문서를 참고해주세요.

1. 카드 배분

- 딜러는 플레이어와 자신에게 각각 두 장의 카드를 나눠준다.
  - 플레이어 : 두 장 모두 오픈
  - 딜러 : 두 장 모두 오픈

2. 카드의 가치

- Ace : 11
- 페이스 카드(King, Queen, Jack) : 10
- 숫자 카드(2 ~ 10) : 카드에 적힌 숫자 그대로의 값

3. 플레이어의 선택

- 플레이어는 현재 카드의 합이 21 이하일 때 카드를 추가로 받을 수 있다.
  - **히트(Hit)** : 카드를 추가로 받겠다.
  - **스탠드(Stand)** : 카드를 그만 받겠다.
- 카드의 합이 21을 초과(버스트, Bust)하면 딜러의 행동에 관계 없이 **즉시 패배**한다.

4. 승패 결정

- 플레이어가 스탠드한 후, 딜러는 뒤집었던 카드를 공개하고 다음의 규칙에 따라 카드를 받는다.
  - 딜러의 카드 합이 16 이하 : 반드시 히트
  - 딜러의 카드 합이 17 이상 : 반드시 스탠드
- 승패는 다음 기준에 따른다.
  - 딜러가 버스트 : 승리
  - `딜러의 카드 합 < 플레이어의 카드 합` : 승리
  - `딜러의 카드 합 = 플레이어의 카드 합` : 무승부
  - `딜러의 카드 합 > 플레이어의 카드 합` : 패배

5. 카드 카운팅

- 1덱(조커를 제외한 52장)만을 사용하며, 카드를 모두 소진하면 새 덱을 사용한다.

> 블랙잭을 소재로 한 영화 <21>을 추천합니다 🃏  
> [무비프라임 유튜브, 라스베가스를 털어버린 MIT 천재들 실화 (결말포함)](https://youtu.be/_DO5S-mia3s)

## 입출력 예시

Phase 1. _오프닝_

**출력**

```
블랙잭 게임을 시작합니다.
```

Phase 2. _최초 분배_

**출력**

```
플레이어가 받은 카드는 7클로버, A하트입니다.
딜러가 받은 카드는 8스페이드, 2하트입니다.
```

Phase 3. _플레이어 동작_

**입력**

- 동작 결정

```
카드를 더 받으시겠습니까? (y/n) :
```

**출력**

- 히트한 경우

```
카드를 더 받으시겠습니까? (y/n) : y
플레이어가 받은 카드는 J하트입니다.
카드를 더 받으시겠습니까? (y/n) :
```

- 히트했는데 버스트인 경우

```
카드를 더 받으시겠습니까? (y/n) : y
플레이어가 받은 카드는 J하트입니다.
플레이어가 버스트입니다.
```

- 스탠드한 경우

```
카드를 더 받으시겠습니까? (y/n) : n
플레이어 카드의 합은 18입니다.
```

Phase 4. _딜러 동작_

**출력**

```
딜러가 히트하였습니다.
딜러가 받은 카드는 A스페이드입니다.
딜러가 스탠드하였습니다.
딜러 카드의 합은 21입니다.
```

- 딜러가 버스트인 경우

```
딜러가 히트하였습니다.
딜러가 받은 카드는 10스페이드입니다.
딜러가 버스트입니다.
```

Phase 5. _엔딩_

**출력**

- 패배한 경우

```
플레이어가 패배하였습니다 😭
```

- 승리한 경우

```
WINNER WINNER CHICKEN DINNER 🍗
```

- 무승부인 경우

```
무승부입니다.
```

Phase 6. _게임 재개_

**입력**

- 게임 진행 여부

```
게임을 계속하시겠습니까? (y/n) :
```

**출력**

- 계속하는 경우

```
게임을 계속하시겠습니까? (y/n) : y
블랙잭 게임을 시작합니다.
...
```

- 종료하는 경우

```
게임을 계속하시겠습니까? (y/n) : n
블랙잭 게임을 종료합니다.
총 4판하였으며, 3승 0무 1패입니다.
```

**실행 결과 예시**

```
블랙잭 게임을 시작합니다.
플레이어가 받은 카드는 7클로버, A하트입니다.
딜러가 받은 카드는 8스페이드, 2클로버입니다.
카드를 더 받으시겠습니까? (y/n) : y
플레이어가 받은 카드는 J하트입니다.
카드를 더 받으시겠습니까? (y/n) : n
플레이어 카드의 합은 18입니다.
딜러가 히트하였습니다.
딜러가 받은 카드는 A스페이드입니다.
딜러가 스탠드하였습니다.
딜러 카드의 합은 21입니다.
플레이어가 패배하였습니다 😭
게임을 계속하시겠습니까? (y/n) : n
블랙잭 게임을 종료합니다.
총 4판하였으며, 3승 0무 1패입니다.
```

- 사용자가 잘못된 값을 입력한 경우 `throw` 문을 사용해 적절한 에러 메세지와 함께 예외를 발생시킨 후 애플리케이션을 종료하여야 합니다.
- 나눠주는 도중 카드가 모두 소진된 경우 새로운 덱을 셔플하여 사용하여야 합니다.

## 기술 스택 관련 제한사항

- `index.js`를 수정하지 마세요. `npm run build`, `npm run start`를 차례대로 입력하여 프로그램을 번들 및 실행할 수 있습니다.
- 프로그램 종료 시 `process.exit()`을 호출하지 마세요.
- `__tests__` 폴더에 기작성된 테스트 코드를 모두 통과해야 합니다. `npm run test`를 입력하여 테스트할 수 있습니다.
  - 해당 테스트를 모두 통과한 것을 [yopark.dev@gmail.com](mailto:yopark.dev@gmail.com)로 인증해주세요.
  - 간소화된 블랙잭 룰을 벗어난 추가 구현을 하는 경우에는, 더 이상 테스트를 신경쓰지 않으셔도 됩니다.
