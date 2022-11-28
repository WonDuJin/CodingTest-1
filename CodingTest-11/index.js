const http = require("http");
const fs = require("fs");
const path = require ("path");



const header = fs.readFileSync("./header.txt",'utf-8')
const body = fs.readFileSync("./body.txt",'utf-8')
const main = fs.readFileSync("./main.txt",'utf-8')
const head = fs.readFileSync("./head.txt",'utf-8')
const footer =fs.readFileSync("./footer.txt",'utf-8')

fs.writeFileSync('html.txt',head + body + main + header+ footer)

const server  = http.createServer((req,res)=>{

  const staticRoute=(neadFile, statusCode,contentType)=>{
    const readData =fs.readFileSync(neadFile,(err)=>{
      if(err) throw err;
    });
    res.writeHead(statusCode,{"Content-Type":contentType});
    res.write(readData);
    res.end();
  }
  

  // if(req.method === "GET"){
  //   if(req.url === '/'){
  //     staticRoute('./html.txt', 200, 'text/html')
  //   }
  // }

  if (req.method==="POST","GET"){
    let getString = req.url;
    switch (getString){
      case "/name":
        let test =''
        req.on('data',(data)=>{
          test = data          
        })
        req.on('end',()=>{
          
          fs.writeFileSync('postHTML.txt',head + main + test + header+ footer)          
          staticRoute("./postHTML.txt",200,"text/html");  
        })
        break;
      case "/":
        staticRoute('./html.txt', 200, 'text/html')
      }
    }  
  });



  server.listen(5678,(err)=>{
    console.log("서버 돌아가는중....");
    if (err) throw err;
  });

  