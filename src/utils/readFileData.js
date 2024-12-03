import fs from 'fs';

const readFileData = (filePath) => {
  const fileInfo = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
  fileInfo.shift(); // 첫 번째 줄 삭제
  // TODO: 첫 번째 줄의 값들도 함께 반환하여 해당 값들을 키로 사용하는 방식은 어떨까?

  return fileInfo;
}

export default readFileData;
