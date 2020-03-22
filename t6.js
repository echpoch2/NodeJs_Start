var http = require("http");
var url =require("url");
var qs = require("qs");
let parseString = require('xml2js').parseString;
let xmlbuilder = require('xmlbuilder');
POST_h=(req,res)=>{
    switch(req.url){
        case "/":
        let result='';
        req.on('data', (data)=>{result+=data;})
        req.on('end', ()=>{
            
           
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.write("<SERVER>");
            res.write(result);
            res.end("</SERVER>")
            
        })
        
        break;
    default: 
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end("404");
        break;
       
    }
};

let server = http.createServer( (req, res)=>{
    switch (req.method){
        case 'POST':
            POST_h(req,res);
            break;
    }
});
server.listen(3000, (v)=>{console.log('OK')});