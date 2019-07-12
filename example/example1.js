var http = require('http');
const fs = require('fs');
const script_tmpl = require('script-tmpl');
http.createServer(function (req, res) {
  fs.readFile("template.html", "utf8", function(err, data) {
    script_tmpl.render(data, function(error, html) {
      if(error) {
		console.log(error);
        res.write("");
        res.end();
      } else {
        res.write(html);
        res.end();
      }
      
    });
    
  });
}).listen(8080);