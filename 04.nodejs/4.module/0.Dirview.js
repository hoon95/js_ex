const fs = require('fs');
const path = require('path');
const directoryPath = "../";

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log(err.message);
        return;
    }

    files.forEach(file => {
        const fullPath = path.join(directoryPath, file);

        const stats = fs.statSync(fullPath);
        console.log(stats);

        // fs.stat(fullPath, (err, stat) => {
        //     if(err){
        //         console.log(err.message);
        //         return;
        //     }

        //     if(stat.isDirectory()){
        //         fs.readdir(fullPath, (err, subFiles) => {
        //             if(err){
        //                 console.log(err.message);
        //                 return;
        //             }
                    
        //             console.log('+-+', fullPath);
        //             subFiles.forEach(subFile => {
        //                 console.log(`+  \\-- ${fullPath}\\${subFile}`);
        //             });
        //         });
        //     }
        // });
    });
});
