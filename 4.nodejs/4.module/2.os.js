const os = require('os');

const hostname = os.hostname();
console.log(`호스트 명 : ${hostname}`);

const tempDir = os.tmpdir();
console.log(`임시 폴더 경로 : ${tempDir}`);

const freemem = os.freemem();
console.log(`잔여 메모리 : ${freemem}`);

const cpu = os.cpus();
console.log(`CPU: ${cpu}`);