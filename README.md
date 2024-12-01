# 🏛️ woowacourse-precourse-boilerplate

## Node.js Version (My Local)

✔️ **nvm**: `0.40.0`

✔️ **npm**: `10.8.2`

✔️ **node**: `20.18.0`

## Woowacourse Apply Platform

- [우아한테크코스 지원 및 과제 제출 사이트](https://apply.techcourse.co.kr/)

## Precourse Submission Guide

- [프리코스 과제 가이드](https://github.com/woowacourse/woowacourse-docs/tree/main/precourse)

- [비공개 저장소 제출 가이드](https://docs.google.com/document/d/1cmg0VpPkuvdaetxwp4hnyyFC_G-1f2Gr8nIDYIWcKC8/edit?tab=t.0#heading=h.1x8npe961lrb)

## JavaScript Mission Utils Library

- [javascript-mission-utils](https://github.com/woowacourse-projects/javascript-mission-utils/tree/main)

## JavaScript Style Guide

- [woowacourse-style-guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)

- [airbnb-javascript-style-guide](https://github.com/airbnb/javascript)

- [airbnb-javascript-style-guide-kr-ver.](https://github.com/tipjs/javascript-style-guide)

## Commit Message Conventions

- [angularJS-git-commit-message-conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

## 진행 방식

- 미션은 `과제 진행 요구 사항`, `기능 요구 사항`, `프로그래밍 요구 사항` 세 가지로 구성되어 있다.

- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.

- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

- 정해진 시간을 지키지 않을 경우 미션을 제출하지 않은 것으로 간주한다.
- 비공개 저장소인 경우, 정해진 시간 내에 우아한테크코스 계정을 협력자로 초대하지 않으면 제출하지 않은 것으로 간주한다.
- 종료 일시 이후에는 추가 푸시를 허용하지 않는다.

## 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.

  - GitHub을 활용한 제출 방법은 `Precourse Submission Guide`의 `비공개 저장소 제출 가이드` 문서를 참고해 제출한다.

- GitHub에 미션을 제출한 후 `Woowacourse Apply Platform`에서 과제 제출물을 최종 제출한다.

  - 자세한 안내는 `Precourse Submission Guide`의 `프리코스 과제 가이드`를 참고한다.

  - 과제를 수행하면서 느낀 점, 배운 점, 많은 시간을 투자한 부분 등 자유롭게 작성한다.

## 과제 제출 전 체크 리스트

- 기능을 올바르게 구현했더라도 **요구 사항에 명시된 출력 형식을 따르지 않으면 0점**을 받게 된다.

- 기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.

- **테스트가 실패하면 점수가 0점**이 되므로 제출하기 전에 반드시 확인한다.

## 테스트 실행 가이드

- 터미널에서 `node --version`을 실행하여 `Node.js` 버전이 `20.17.0` 이상인지 확인한다.

- 아래 명령을 입력하여 패키지를 설치한 후 실행하는 데 문제가 없어야 한다.

```
npm install
npm run test
npm run start
```

## 과제 진행 요구 사항

- 미션은 주어진 미션 저장소를 생성하는 것으로 시작한다.

- 기능을 구현하기 전 `README.md`에 구현할 기능 목록을 정리해 추가한다.

- Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.
  - `Commit Message Conventions`을 참고해 커밋 메시지를 작성한다.

- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 프로그래밍 요구 사항 1

- `Node.js` `20.17.0` 버전에서 실행 가능해야 한다.

- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.

- `package.json` 파일은 변경할 수 없으며, **제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.**

- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.

- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.

- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 `JavaScript Style Guide`를 원칙으로 한다.

## 프로그래밍 요구 사항 2

- `indent(인덴트, 들여쓰기) depth`를 `3`이 넘지 않도록 구현한다. `2`까지만 허용한다.

  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 `2`이다.

  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.

- `3항 연산자`를 쓰지 않는다.

- `함수(또는 메서드)`가 `한 가지 일`만 하도록 최대한 작게 만들어라.

- `Jest`를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

  - 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
    - [Using Matchers](https://jestjs.io/docs/using-matchers)
    - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
    - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

## 프로그래밍 요구 사항 3

- `else`를 지양한다.

  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.

  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.

- 구현한 기능에 대한 `단위 테스트를 작성`한다. 단, UI 로직은 제외한다.

## 프로그래밍 요구 사항 4

- 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.

- 입출력을 담당하는 클래스를 별도로 구현한다.

  - 아래 `InputView`, `OutputView` 클래스를 참고하여 입출력 클래스를 구현한다.

  - 클래스 이름, 메소드 반환 유형, 시그니처 등은 자유롭게 수정할 수 있다.
  
  ```jsx
    const InputView = {
      async readItem() {
        const input = await MissionUtils.Console.readLineAsync('~~를 입력해 주세요.');
        // ...
      }, 
      // ...
    }
  ```
  
  ```jsx
    const OutputView = {
      printResult(result) {
        MissionUtils.Console.print(result);
        // ...
      }, 
      // ...
    }
  ```

## 라이브러리

- `@woowacourse/mission-utils`에서 제공하는 `Console`, `Random`, `DateTimes`, `shuffle` API를 사용하여 구현해야 한다.

  - n개 중 한 개의 Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.

  - 중복되지 않는 n개의 Random 값 추출은 `Random.pickUniqueNumbersInRange()`를 활용한다.

  - 현재 날짜와 시간을 가져오려면 `DateTimes.now()`를 활용한다.

  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

  - 특정 숫자 배열의 순서를 임의로 섞으려면 `Random.shuffle(numArray)`를 활용한다.

## 구현 시간 줄이는 나만의 Tip!

- `constants.js` 파일은 만들지 말자. 테스트까지 구현 모두 끝나고 시간 남으면 상수화하기!

- `JSDoc` 주석은 시간이 더 오래 걸리긴 하지만, 이걸 사용하면 타입 추론이 가능해서 다른 코드 짜기가 수월해서 오히려 구현 과정에서 헷갈리지 않고 빠르게 구현 가능하다. 하지만 코드 베이스 볼륨이 큰 경우엔 헷갈리는 부분에만 이를 적용하자. 그럼 테스트 코드 짤 때나 다른 파일에서 해당 변수나 함수를 불러올 때 수월하다.

- 헷갈리는 로직이 있으면 주석을 달아둬도 좋다. 프로그래밍 요구사항에는 쓸데 없이 주석을 달지 말라고 했지만, 빨리 구현하는 것이 우선이다.

- 리팩토링(`함수 길이 10`, `indent depth 2`, `공통 로직 분리` etc.)도 테스트 구현 모두 끝나고 시간 남으면 하자! 어차피 내부 함수 분리하면 `private`이기 때문에 테스트를 새로 작성 해줄 필요는 없다. 하지만 이 함수들을 의존하는 경우에는 수정이 필요할 수 있음. 테스트할 때 의존성 함수만 잘 고려해서 해주면 테스트 코드 작성해주면 된다.

- 테스트 코드 구현할 때는 `단위 테스트`를 먼저 구현하고 그 다음에 `통합 테스트`를 구현하자. 그게 효율적이다. 만약 최종 코딩 테스트에서 `통합 테스트`가 주어지지 않는다면 `통합 테스트`를 먼저 구현하는 것이 맞다. 시간 없으면 기본적으로 주어진 `통합 테스트`만 테스트 하고 `단위 테스트`만 구현하자.

- 테스트 구현할 때 `test.each()`를 처음부터 사용하지 말자. 우선 하나의 테스트 케이스만 해서 테스트 전체 로직을 구현한 후 여러 케이스를 추가하자. 만약 유효성 검증에 대한 테스트인 경우에는 `test.each()`로 바로 구현해도 좋다. `단위 테스트`만 이 규칙을 적용하고 `통합 테스트`는 `test.each()` 사용하지 말고 그냥 주어진 컨벤션 맞춰서 가도록 한다. 만약 시간 남으면 `test.each()`로 리팩토링 하자.

## 사전에 대비할 것들

- 미리 Node.js 버전 다 확인하기

- 노션 서버 터질 수도 있으니 미리 창 다 켜놓고 소감문도 메모장에 미리 복붙해 놓을 것

- 제출 가이드나 프로그래밍 요구사항 미리 숙지해두기

- 춥고 긴장해서 손 시려울 수 있으니 핫팩 챙겨가기

- 눈이나 비 올 것을 대비해서 우산 챙기기

- 도착 시간 늦을 것 같으면 전날 미리 가 있기 (12월 초 지하철 파업 예정)

- 만약 도중에 전화 올 수도 있으니 미리 방해금지 모드를 한 후 에어팟 착용하기

- 전날에 배아플 만한 음식 먹지 않기

- git push 할 때 브랜치 헷갈리지 말 것!

## 코딩 테스트 볼 때 크롬에 띄울 창 정리

- [내 레포지토리](https://github.com/sooyeoniya?tab=repositories)
  - 지난 프리코스나 보일러 플레이트 참고할 경우 바로 찾아보기 위함

- [우아한테크코스 지원 및 과제 제출 사이트](https://apply.techcourse.co.kr/)
  - 빠른 제출을 위함

- [파파고 번역기](https://papago.naver.com/)
  - 함수나 변수명 지을 때 필요

- [우아한테크코스 미션 유틸 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils/tree/main)
  - 혹시 미션 유틸 관련 오류나 처음 써보는 것일 경우 레포 뜯어 보고 파라미터나 반환 값 타입 확인하기

- [Jest API 리스트](https://jestjs.io/docs/api)
  - 헷갈리는 macher 같은 것들 있으면 바로 검색하기 위함

- [JavaScript MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript)
  - 헷갈리는 JS 문법 검색을 위한 MDN 사이트

- [정규 표현식 정리 블로그](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC)
  - 만약 정규 표현식을 사용해야 하는 상황이 있으면 멘붕오지 말 것. 미리 준비 철저히 할 것.

## Git 명령어 순서

```
// 원격 저장소 클론 및 VSC 열기
cd IdeaProjects
git clone {HTTPS_WEB_URL}
code .

npm install
npm run test
npm run start

git add .
git add {filePath}
git status
git commit -m "feat/docs/fix/...: xxx"
git push origin {branchName}

// stage -> unstage
git reset HEAD {filePath} 

// 이전 커밋으로 돌리기 ('~1'은 바로 직전 커밋으로 돌린다는 의미)
git reset HEAD~1 // unstaged 상태
git reset --soft HEAD~1 // staged 상태
git reset --hard HEAD~1  // 이전 커밋 변경 사항 모두 삭제

// 이미 원격 저장소에 올라간 경우 강제 푸시
git push -f origin {branchName}
```

## 전체 폴더 구조

```
__tests__
├── ..
├── ..
├── ..
├── ..
└── ApplicationTest.js

public
├── ...md
└── ...md

src
├── App.js
├── index.js
├── constants
│   └── constants.js
├── controllers
│   └── Controller.js
├── domains
│   ├── ..
│   └── ..
├── services
│   ├── ..
│   └── ..
├── utils
│   ├── ..
│   └── parser.js
├── validations
│   ├── validateXXX.js
│   └── validateXXX.js
└── view
    ├── InputView.js
    └── OutputView.js
```
