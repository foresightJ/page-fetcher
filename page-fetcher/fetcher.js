const request = require("request")
const fs = require('fs')

const args = process.argv.slice(2)
const filePath = args[0];
const url = args[1];
console.log(args);


request(url, (error, response, body) => {
    // 
    fs.writeFile(filePath, body, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`downloaded and save ${body} to ${filePath}`)
        //file written successfully
    })

//   console.log('body:', body); 
//   console.log('error:', error); 
//   console.log('response:', response); 
});