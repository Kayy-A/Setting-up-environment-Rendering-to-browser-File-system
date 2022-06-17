const http = require('http');

const server = http.createServer(function(req, res) { 
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
     <html>
      <body>
       <h1>Welcome to Kayy-A Playground</h1>
       <h2>Home</h2>
            <p1>Name: Kayy-A.</p1>

            <p2>Gender: Male.</p2>

            <p3>Programme: NodeJs Part-time Intern.</p3>
        <h3>About</h3>
        <p1>Kayy-A is an employee of Stanbic IBTC Bank and he is currently an intern with Ingressive For Good.</p1>
        <h4>Contact</h4>
        <p1>LinkedIn - https://www.linkedin.com/in/benjamin-o-akinlabi-aca-in-view-6a1b57181.</p1> 
       <body> 
    <html>
    `)
});
server.listen(4000, '127.0.0.1');

console.log("Yes, you have created a server!");