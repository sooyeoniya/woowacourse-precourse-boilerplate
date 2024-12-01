import deepFreeze from '../utils/deepFreeze.js';

export const INPUT_MESSAGES = Object.freeze({
  DEFAULT: '\n~~를 입력해 주세요.\n',
	CALLBACK: (param) => `\n${param}을 입력해 주세요.\n`,
});

export const OUTPUT_MESSAGES = Object.freeze({

});

export const ERROR_MESSAGES = deepFreeze({
  SOMETHING_1: {
    NUMBER: '[ERROR] ~~이 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] ~~이 정수가 아닙니다. 다시 입력해주세요.',
  },
  SOMETHING_2: {
    RANGE: '[ERROR] ~~는 x 이상 xx 이하의 숫자여야 합니다. 다시 입력해주세요.',
    DUPLICATION: '[ERROR] ~~ 중에 중복되는 숫자가 있습니다. 다시 입력해주세요.',
  },
});
