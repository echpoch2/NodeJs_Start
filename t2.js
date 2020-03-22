var http = require("http");
var url =require("url");
POST_h=(req,res)=>{
    switch(url.parse(req.url, true).pathname){
        case '/SUM':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            
            let q = url.parse(req.url, true).query;
            
  
            let i = 0;
            var buf;
            for (const key in q) {
                
                if(i==1)
                {
                    res.write("+");
                    
                }
                else
                    buf = q[key]
                res.write(key)
                if(i==1)
                {
                    
                    res.write("="+(parseInt(q[key])+parseInt(buf)))
                }
                
                i++;
            }
       
            
            res.end(";");
            break;
        case '/SUB':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            
            let qq = url.parse(req.url, true).query;
            
  
            let i2 = 0;
            var buf;
            for (const key in qq) {
                
                if(i2==1)
                {
                    res.write("-");
                    
                }
                else
                    buf = qq[key]
                res.write(key)
                if(i2==1)
                {
                    
                    res.write("="+(parseInt(buf)-parseInt(qq[key])))
                }
                
                i2++;
            }
       
            
            res.end(";");
            break;
        case '/CONC':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            
            let qqq = url.parse(req.url, true).query;
            
  
            let i3 = 0;
            var buf;
            for (const key in qqq) {
                
                if(i3==1)
                {
                    res.write("+");
                    
                }
                else
                    buf = qqq[key]
                res.write(key)
                if(i3==1)
                {
                    
                    res.write("="+parseInt(buf)+parseInt(qqq[key]))
                }
                
                i3++;
            }
       
            
            res.end(";");
            break;      
        default: 
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end("404");
            break;

}

};

GET_h=(req,res)=>{
    switch(url.parse(req.url, true).pathname){
        case '/SUM':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            
            let q = url.parse(req.url, true).query;
            
  
            let i = 0;
            var buf;
            for (const key in q) {
                
                if(i==1)
                {
                    res.write("+");
                    
                }
                else
                    buf = q[key]
                res.write(key)
                if(i==1)
                {
                    
                    res.write("="+(parseInt(q[key])+parseInt(buf)))
                }
                
                i++;
            }
       
            
            res.end(";");
            break;
        case '/SUB':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            
            let qq = url.parse(req.url, true).query;
            
  
            let i2 = 0;
            var buf;
            for (const key in qq) {
                
                if(i2==1)
                {
                    res.write("-");
                    
                }
                else
                    buf = qq[key]
                res.write(key)
                if(i2==1)
                {
                    
                    res.write("="+(parseInt(buf)-parseInt(qq[key])))
                }
                
                i2++;
            }
       
            
            res.end(";");
            break;
        case '/CONC':
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            
            let qqq = url.parse(req.url, true).query;
            
  
            let i3 = 0;
            var buf;
            for (const key in qqq) {
                
                if(i3==1)
                {
                    res.write("+");
                    
                }
                else
                    buf = qqq[key]
                res.write(key)
                if(i3==1)
                {
                    
                    res.write("="+parseInt(buf)+parseInt(qqq[key]))
                }
                
                i3++;
            }
       
            
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
})
server.listen(3000, (v)=>{console.log('OK')})