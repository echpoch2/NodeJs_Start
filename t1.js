var http = require("http");
GET_h=(req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;
        case '/A':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;
        case '/B':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;
        case '/A/B':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;        
        default: 
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end("404");
            break;

}
};
POST_h=(req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;
        case '/A':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;
        case '/B':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
            break;
        case '/A/B':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(req.method +":"+req.url);
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
            //res.end(req.method +":"+req.url);
            break;
        case 'POST':
            POST_h(req,res);
            break;
    }
})
server.listen(3000, (v)=>{console.log('OK')})