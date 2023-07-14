import express from 'express';
import cors from 'cors';

export type UrlMap = Record<number, string>;

export function createApp(urlmap: UrlMap = {}) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.post('/api/shorten', (req, res) => {
    const original = req.body.original;
    if (!original) {
      res.status(400).send({ error: 'Missing "original" field in request body.' });
      return;
    }
    
    const id = Object.keys(urlmap).length;
    const short = `http://localhost:3333/s/${id}`;
    urlmap[id] = original;

    res.send({
      short: short,
      original: original,
    });
  });

  app.get('/s/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const original = urlmap[id];
    if (!original) {
      return next(new Error('Invalid URL ID.'));
    }
    res.redirect(original);
  });

  return app;
}

// The server instantiation and the URL base for shortenUrl should be in a separate file
// that you do not import during testing.

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3333;
  const server = createApp().listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
}