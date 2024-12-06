import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    if (input === undefined) {
      throw new Error('NO INPUT');
    }

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expects) => {
  expects.forEach((exp) => {
    expect(received).toContain(exp);
  });
};

const expectLogContainsWithoutSpaces = (received, expects) => {
  const processedReceived = received.replace(/\s/g, ''); // 공백 제거 (정규 표현식 추가 가능)
  expects.forEach((exp) => {
    expect(processedReceived).toContain(exp);
  });
};

// 에러 발생 시 종료되는 로직에 사용
const runExceptions = async ({ inputs = [], expectedErrorMessage = [] }) => {
  // given
  mockQuestions([...inputs]);

  // when
  const app = new App();
  
  // then
  await expect(app.run()).rejects.toThrow(expectedErrorMessage);
};

// 에러 발생 시 다시 입력 받는 로직에 사용
const runExceptionsRetryVer = async ({
  inputs = [],
  inputsToTerminate = [],
  expected = [],
}) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions([...inputs, ...inputsToTerminate]);

  // when
  const app = new App();
  await app.run();

  const output = getOutput(logSpy);

  // then
  expectLogContains(output, expected);
};

// 에러 없이 한 번에 실행되는 로직에 사용
const run = async ({ 
  inputs = [], 
  expected = [],
  expectedIgnoringWhiteSpaces = [],
}) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions(inputs);

  // when
  const app = new App();
  await app.run();

  const output = getOutput(logSpy);

  // then
  if (expectedIgnoringWhiteSpaces.length > 0) {
    expectLogContainsWithoutSpaces(
      output,
      expectedIgnoringWhiteSpaces
    );
  }
  if (expected.length > 0) {
    expectLogContains(output, expected);
  }
};

// 에러 발생 시 다시 입력 받는 로직에 사용
const runRetryVer = async ({
  inputs = [],
  inputsToTerminate = [],
  expected = [],
  expectedIgnoringWhiteSpaces = [],
}) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions([...inputs, ...inputsToTerminate]);

  // when
  const app = new App();
  await app.run();

  const output = getOutput(logSpy);

  // then
  if (expectedIgnoringWhiteSpaces.length > 0) {
    expectLogContainsWithoutSpaces(
      output,
      expectedIgnoringWhiteSpaces
    );
  }
  if (expected.length > 0) {
    expectLogContains(output, expected);
  }
};

describe('통합 테스트', () => {
  test('예외 테스트 (1)', async () => {
    await runExceptions({
      inputs: ['~~'],
      expected: ['[ERROR]'],
    });
  });

  test('예외 테스트 (2)', async () => {
    await runExceptionsRetryVer({
      inputs: ['~~'],
      inputsToTerminate: ['!!'],
      expected: ['[ERROR]'],
    });
  });

  test.each([
    [
      ['inputString 1'],
      [
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
      ]
    ],
    [
      ['inputString 2'],
      [
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
      ]
    ],
  ])('기능 테스트 (1)', async (inputs, expected) => {
    await run({
      inputs: inputs,
      expected: expected,
    });
  });

  test.each([
    [
      ['inputString 1'],
      ['inputString retry 1'],
      [
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
      ]
    ],
    [
      ['inputString 2'],
      ['inputString retry 2'],
      [
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
      ]
    ],
  ])('기능 테스트 (2)', async (inputs, inputsToTerminate, expected) => {
    await runRetryVer({
      inputs: inputs,
      inputsToTerminate: inputsToTerminate,
      expected: expected,
    });
  });
});
