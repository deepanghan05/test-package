# test-express-request-logger

A simple Express middleware for logging incoming requests in JSON format.

## Installation

```bash
npm install test-express-request-logger
```

## Usage

```js
import express from 'express';
import logger from 'test-express-request-logger';

const app = express();

app.use(collectLogs);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## Example Output

Creates a `data.json` file and stores objects like this:

```json
{
  "route": "/",
  "method": "GET",
  "ip": "127.0.0.1",
  "timestamp": "2025-07-21T15:34:56.123Z"
}
```

## License

MIT