var http = require("http");
var url =require("url");
var qs = require("qs");
POST_h=(req,res)=>{
    switch(req.url){
        case "/":
        let result='';
        req.on('data', (data)=>{result+=data;})
        req.on('end', ()=>{
            
           
        })
        
        break;
    default: 
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end("404");
        break;
       
    }
};

GET_h=(req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.write(
                "<form method='post' action='/'>"+
                "<input type='file' name='file'><br> "+
                "<input type='submit' name='file' value='load'>"
               
                
            );
            res.end(";");
            break;
        default: 
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end("404");
            break;
    }
};
let server = http.createServer( (req, res)=>{
    switch (req.method){
        case 'GET':
            GET_h(req, res);
            //res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            //res.end(req.method +":"+url.parse(req.url, true).pathname);
            break;
        case 'POST':
            POST_h(req,res);
            break;
    }
});
server.listen(3000, (v)=>{console.log('OK')});