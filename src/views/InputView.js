import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/constants.js';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async read() {
    return await readPipe(INPUT_MESSAGES.DEFAULT);
  },

  async readParam(param) {
    return await readPipe(INPUT_MESSAGES.CALLBACK(param));
  },
}

export default InputView;
