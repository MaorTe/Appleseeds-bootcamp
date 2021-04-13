const https = require('https');
const url = 'https://dog.ceo/api/breeds/image/random';

const request = https.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		//returns buffer after toString will return the string
		data = data + chunk.toString();
	});

	response.on('end', () => {
		//returns JSON after conversion
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (error) => {
	console.log('error: something went wrong', error);
});

request.end();
