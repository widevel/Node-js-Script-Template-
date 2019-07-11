# Nodejs Script Template

A basic script that offers the possibility of writing JS code in your HTML template.

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
