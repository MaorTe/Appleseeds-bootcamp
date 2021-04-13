const http = require('http');
const url = require('url');
const fs = require('fs');
function handler(req, res) {
	const parsedUrl = url.parse(req.url, true);

	//home
	if (parsedUrl.pathname === '/') {
		const file = fs.readFileSync('./index.html');
		res.writeHead(200, { 'Content-type': 'text/html' });
		res.write(file);
		res.end();
	} else if (parsedUrl.pathname === '/index.css') {
		const file = fs.readFileSync('./index.css');
		res.writeHead(200, { 'Content-type': 'text/css' });
		res.end(file);
	} else if (parsedUrl.pathname === '/index.js') {
		const file = fs.readFileSync('./index.js');
		res.writeHead(200, { 'Content-type': 'text/javascript' });
		res.end(file);

		//raw-html
	} else if (parsedUrl.pathname === '/raw-html') {
		res.writeHead(200, { 'Content-type': 'text/html' });
		res.write('<h1>Welcome</h1>');
		res.end();

		//users
	} else if (parsedUrl.pathname === '/users') {
		res.writeHead(200, { 'Content-type': 'application/json' });
		res.write(
			JSON.stringify([
				{ name: 'person1', age: 27 },
				{ name: 'person2', age: 26 },
			])
		);
		res.end();
	} else {
		res.writeHead(404, { 'Content-type': 'text/plain' });
		res.end();
	}
}
const server = http.createServer(handler);
server.listen(3000);
