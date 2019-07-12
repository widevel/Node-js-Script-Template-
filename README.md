# Nodejs Script Template

A basic script that offers the possibility to writing JS code in your HTML template.
# Install
```
npm install script-tmpl --save
```
# Example

template.html
```
<!DOCTYPE html>
<html>
<body>
<!NJ>="Hello World"<!NJ>
<!NJ>for(a=0;a<=10;a++) {<!NJ>
<span>For loop <!NJ>=a<!NJ></span>
<!NJ>}<!NJ>
<h1><!NJ>="Vive la France"<!NJ></h1>
<h1><!NJ>="1+1=" + (1+1)<!NJ></h1>
</body>
</html>

```
nodejs code:
```
const fs = require('fs');
const script_tmpl = require('script-tmpl');
fs.readFile("template.html", "utf8", function(err, data) {
  script_tmpl.render(data, function(error, html) {
    if(error) {
      console.log(error);
    } else {
      console.log(output);
    }
    
  });
  
});
```
HTTP server:
```
var http = require('http');
const fs = require('fs');
const script_tmpl = require('script-tmpl');
http.createServer(function (req, res) {
  fs.readFile("template.html", "utf8", function(err, data) {
    script_tmpl.render(data, function(error, html) {
      if(error) {
        res.write(error);
        res.end();
      } else {
        res.write(html);
        res.end();
      }
      
    });
    
  });
}).listen(8080);
```

Result:
```
<!DOCTYPE html>
<html>
<body>
Hello World

<span>For loop 0</span>

<span>For loop 1</span>

<span>For loop 2</span>

<span>For loop 3</span>

<span>For loop 4</span>

<span>For loop 5</span>

<span>For loop 6</span>

<span>For loop 7</span>

<span>For loop 8</span>

<span>For loop 9</span>

<span>For loop 10</span>

<h1>Vive la France</h1>
<h1>1+1=2</h1>
</body>
</html>
```
#Usage:
**Single line echo.**
- Line breaks not allowed
- no semicolon at the end
- Equal sign at the beginning is necessary
```
<!NJ>="Hello World"<!NJ>
<!NJ>=Math.random()<!NJ>
<!NJ>=var_name<!NJ>
<!NJ>=var_name + "concatenate text"<!NJ>
```
**Multi line JS code**
- Line breaks allowed
- Any code is allowed

```
<!NJ>
for(i=0;i<10;i++) {
  //Loop
}
<!NJ>
```
**Echo function**
- Show text in the template
```
<!NJ>=echo('hello')<!NJ>
```
```
<!NJ>
for(i=0;i<10;i++) {
  echo("I value:" + i);
}
<!NJ>
```
