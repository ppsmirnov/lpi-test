import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import apiRouter from '../src/server/routes';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
    children: false,
    warnings: false,
  },
}));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
