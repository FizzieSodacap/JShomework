const textFile = "./files/sowpods.txt";
// console.log(`${textFile}`);

// function printFile(textFile) {
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       console.log(evt.target.result);
//     };
//     reader.readAsText(textFile);
//   }


console.log("Example to read line by line text");
const fs = require('fs');
const readline = require('readline');
var r = readline.createInterface({
    input : fs.createReadStream(textFile)
});

r.on('line', function (text) {
    if(text.includes('UU')){
        console.log(text);
    }

});
