import { createServer } from 'http';
import { hostname } from 'os';

const server = createServer(async (req, res) => {
	if (req.url == '/ping') {
		console.log(hostname());

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(req.headers));
		res.end();
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(process.env.PORT ?? 3000, () => {
	console.log(`Server listen on ${process.env.PORT ?? 3000}`);
});
