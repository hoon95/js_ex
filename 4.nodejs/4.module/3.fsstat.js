const fs = require('fs');
const directoryPath = "./";

fs.readdir(directoryPath, (err, files) => {
    if(err) {
        console.log(err.message);
        return;
    }
    files.forEach(file => {     // 비동기 -> 동기
        // fs.stat(file, (err, stats) => {
        //     if(err) {
        //         console.log(err.message);
        //         return;
        //     }

        //     if(stats.isDirectory()){
        //         console.log(`Directory : ${file}`);
        //     }
        //     if(stats.isFile()){
        //         console.log(`File: ${file}`);
        //     }
        // })

        // 비동기(stat) -> 동기(statSync)
        try {
            const stat = fs.statSync(file);
            if(stat.isDirectory()){
                console.log(`Directory : ${file}`)
            }
            if(stat.isFile()){
                console.log(`File: ${file}`);
            }
        } catch(err) {
            console.log(err.message);
        }
    })
})