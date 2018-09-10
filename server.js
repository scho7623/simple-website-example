import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StyleSheetServer } from 'aphrodite';
import { Provider } from 'react-redux';
import React from 'react';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import renderTemplate from './template';
import configureStore from './src/store';

const compiler = webpack(config);
const app = express();
const port = 8888;

compiler.hooks.done.tap('ServerHotReloadPlugin', () => {
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]src[\/\\]/.test(id) && !/node_modules/.test(id)) {
      delete require.cache[id];
    }
  });
});

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  const App = require('./src/App').default;
  const store = configureStore();
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    );
  });

  res.send(renderTemplate(html, css));
});

app.listen(port, () => console.log(`App running on port ${port}`));
