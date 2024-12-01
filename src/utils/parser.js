/**
 * 문자열을 숫자로 반환한다.
 * @param {string} string 
 * @returns {number}
 */
const stringToNumber = (string) => {
  return Number(string);
}

/**
 * 문자열 앞뒤 공백을 제거한다.
 * @param {string} string 
 * @returns {string}
 */
const removeTheSpace = (string) => {
  return string.trim();
}

/**
 * 문자열 앞뒤 공백을 제거하고 숫자로 반환한다.
 * @param {string} string
 * @returns {number}
 */
const removeTheSpaceAndNum = (string) => {
  return Number(string.trim());
}

/**
 * 문자열을 문자열 배열로 반환한다.
 * @param {string} string 
 * @returns {Array<string>}
 */
const stringToStrArray = (string) => {
  return string.split(',').map((element) => element.trim());
}

/**
 * 문자열을 숫자 배열로 반환한다.
 * @param {string} string 
 * @returns {Array<number>}
 */
const stringToNumArray = (string) => {
  return string.split(',').map((element) => Number(element).trim());
}

/**
 * 문자열 배열에 빈 값이 있는 경우 삭제한다.
 * @param {Array<string>} strArray 
 * @returns {Array<string>}
 */
const deleteEmptyValue = (strArray) => {
  return strArray.filter((element) => element !== '');
}

/**
 * 숫자에 천 단위 콤마를 붙여 반환한다.
 * @param {number} number 
 * @returns {string}
 */
const addThousandComma = (number) => {
  return number.toLocaleString('ko-KR');
}

/**
 * 숫자에 소숫점 한 자리까지 천 단위 콤마를 붙여 반환한다.
 * @param {number} number 
 * @returns {string}
 */
const addThousandCommaWithPoint = (number) => {
  return number.toLocaleString('ko-KR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

/**
 * string을 대문자로 반환한다.
 * @param {string} string 
 * @returns {string}
 */
const getToUpperCase = (string) => {
  return string.toUpperCase();
}

/**
 * string을 소문자로 반환한다.
 * @param {string} string 
 * @returns {string}
 */
const getToLowerCase = (string) => {
  return string.toLowerCase();
}

/**
 * 숫자 배열에 대하여 덧셈하여 숫자를 반환한다.
 * @param {Array<number>} numbers 
 * @returns {number}
 */
const sumNumbers = (numbers) => {
  return numbers.reduce((acc, cur) => acc + Number(cur), 0);
}

/**
 * 특수문자를 이스케이프 처리한다.
 * @param {string} string 
 * @returns {string}
 */
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const parser = {
  stringToNumber,
  removeTheSpace,
  removeTheSpaceAndNum,
  stringToStrArray,
  stringToNumArray,
  deleteEmptyValue,
  addThousandComma,
  addThousandCommaWithPoint,
  getToUpperCase,
  getToLowerCase,
  sumNumbers,
  escapeRegExp,

}

export default parser;
