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
      case "/":
        staticRoute('./html.txt', 200, 'text/html');
        break
      case "/soccer":        
          staticRoute("./soccer.txt",200,"text/html");     
        break;
        
      case "/name":
        let test =''
        req.on('data',(data)=>{
          //데이터 자체가 인코딩 되어있어서 한글출력이 웹브라우저에서 한글이 인코딩 된상태로 출력이 되므로 decodeURI로 디코딩을 해주었다. (뭔가 알집개념인 것 같다.)
          test = decodeURI(data)
          // console.log(test)         
        })
        req.on('end',()=>{           
          // console.log(test)
          fs.writeFileSync('postHTML.txt',head + main + test + header+ footer)  
          // console.log(test)        
          staticRoute("./postHTML.txt",200,"text/html");  
        })
        break;

      case "/color":
        let changeColor = ''
        req.on('data',(data)=>{
          console.log(data)
          changeColor  = data 
          console.log(changeColor)       
        })
        req.on('end',()=>{
          fs.writeFileSync('changeColor.txt',head + main + changeColor)
          staticRoute("./changeColor.txt",200,"text/html");          
        })
        break;
        
      }      
    }  
  });



  server.listen(5678,(err)=>{    
    console.log("서버 돌아가는중....");
    if (err) throw err;
  });

  