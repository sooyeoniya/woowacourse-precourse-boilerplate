import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validatedSomething from '../validations/validateSomething.js';
import Domain from '../domains/Domain.js';

class Controller {
  async start() {
    const something = await this.#getValidatedSomething();
    const domain = new Domain(something);
    OutputView.printParam(domain.getField());
  }

  /**
   * 입력 값에 대하여 유효성 검증 후 반환하는 로직 (다시 입력 받는 로직 포함)
   * @returns {string | number | Array<number> | Array<string>} 파싱된 입력 값
   */
  async #getValidatedSomething() {
    try {
      const something = await InputView.read();
      // 입력 값에 대한 파싱이 필요한 경우: const parsedSomething = parser.xxx(something);
      validatedSomething(something);
      return something;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedSomething();
    }
  }
}

export default Controller;
