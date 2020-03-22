var http = require("http");
var url =require("url");
var qs = require("qs");
POST_h=(req,res)=>{
    switch(req.url){
        case "/":
        let result='';
        req.on('data', (data)=>{result+=data;})
        req.on('end', ()=>{
            
            let o =qs.parse(result)
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            console.log(o);
            if(o.mode =='SUM')
            {
                let i=0;
                for (const key in o) {
                
                    if(i==1)
                    {
                        res.write("+");
                        
                    }
                    else
                        buf = o[key]
                    res.write(key)
                    if(i==1)
                    {
                        
                        res.write("="+(parseInt(o[key])+parseInt(buf)))
                        break;
                    }
                    
                    i++;
                }
           
                
                res.end(";");
            }
            if(o.mode =='SUB')
            {
                let i=0;
                for (const key in o) {
                
                    if(i==1)
                    {
                        res.write("+");
                        
                    }
                    else
                        buf = o[key]
                    res.write(key)
                    if(i==1)
                    {
                        
                        res.write("="+(parseInt(buf)-parseInt(o[key])))
                        break;
                    }
                    
                    i++;
                }
           
                
                res.end(";");
            }
            if(o.mode =='CON')
            {
                let i=0;
                for (const key in o) {
                
                    if(i==1)
                    {
                        res.write("+");
                        
                    }
                    else
                        buf = o[key]
                    res.write(key)
                    if(i==1)
                    {
                        
                        res.write("="+parseInt(o[key])+parseInt(buf))
                        break;
                    }
                    
                    i++;
                }
           
                
                res.end(";");
            }
           
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
                "X<input type='textarea' name='X'><br> "+
                "Y<input type='textarea' name='Y'><br>"+
                "<input type='submit' name='mode' value='SUM'>"+
                "<input type='submit' name='mode' value='CON'><input type='submit' name='mode' value='SUB'>'</form>"
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