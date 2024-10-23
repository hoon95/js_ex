const fs  = require('fs');

// 파일 읽기, 쓰기
// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log('Failed to read file', err);
//     }else {
//         console.log(data);
//     }
// });

// const content = 'Add content to txt';

// fs.writeFile('example.txt', content, 'utf-8', (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log('Complete to write content');
//     }
// });

// OS -> 시스템 콜 -> 파일 읽기 요청 -> callback : 비동기 요청의 필요성


// sync
try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log(data);
}catch(err) {
    console.log(err);
}

const content = "add content2";
fs.writeFileSync('newfile.txt', content);
console.log('write complete');

// dir
const path = require('path');

const directoryPath = '../2.error';
fs.readdir(directoryPath, (err, files) => {
    if(err){
        console.log('failed to read');
        return;
    }

    console.log(files);

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        // fs.readFile(file, 'utf-8', (err, data)=> {       // file명을 출력(1.trycatch.js, 2.errthrow.js, ...) -> 경로 에러
        fs.readFile(filePath, 'utf-8', (err, data)=> {      // 경로 설정
            if(err){
                console.log(err.message);       // 경로 에러 : 4.module\1.trycatch.js, ...
                return;
            }
            console.log(data);
        })
    })
})