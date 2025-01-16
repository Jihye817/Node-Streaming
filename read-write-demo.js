const fs = require("fs");

/**
 * createReadStream의 두 번째 인자는 스트림에 대한 옵션 객체로, 없어도 되는 optional입니다.
 * start, end : 읽어올 파일의 인덱스를 지정
 * highWaterMark : 한 번에 읽어올 청크의 크기를 지정
 */

let readStream = fs.createReadStream("input.txt", { start: 0, end: 4 });

readStream.on("data", (readFile) => {
  console.log(readFile.toString());
});

/**
 * writeStream 생성 시 end()를 호출하여 스트림을 종료해 주어야 합니다.
 */
let writeStream = fs.createWriteStream("output.txt");

writeStream.write("hello Node.js!");
writeStream.end();
