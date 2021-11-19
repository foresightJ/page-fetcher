const request = require("request")
const fs = require('fs')

const args = process.argv.slice(2)
const filePath = args[1];
const url = args[0];



// const fetcher = function (url, filePath) {}

request(`${url}`, (err, res, body)  => {


    const resource = body;
    const bytes = body.length;

    fs.writeFile(`${filePath}/index.html`, resource, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
      console.log("file written successfully")
      console.log(`Downloaded and saved ${bytes} bytes to ./index.html.`)
    })


})






// request(url, (error, response, body) => {
//   console.log("url:", url)
//     // 
//     fs.writeFile(filePath, err => {
//         if (err) {
//           console.error(err)
//           return
//         }
//         console.log(`downloaded and save ${body} to ${filePath}`)
//         //file written successfully
//     })

// //   console.log('body:', body); 
// //   console.log('error:', error); 
// //   console.log('response:', response); 
// });