
const isNumber = (param) => {
  if (Number.isNaN(param)) {
    throw new Error('[ERROR] 숫자가 아닙니다.');
  }
}

const isInteger = (param) => {
  if (!Number.isInteger(param)) {
    throw new Error('[ERROR] 정수가 아닙니다.');
  }
}

const validateSomething = (param) => {
  const parsedParam = Number(param);
  isNumber(parsedParam);
  isInteger(parsedParam);
}

export default validateSomething;
