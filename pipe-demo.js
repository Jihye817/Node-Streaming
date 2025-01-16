const fs = require("fs");

let readStream = fs.createReadStream("input-pipe.txt");
let writeStream = fs.createWriteStream("output-pipe.txt");

/**
 * readStream으로 읽어온 파일을 writeStream에 지정된 파일로 바로 적어줍니다.
 */

readStream.pipe(writeStream);