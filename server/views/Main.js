import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";
import App from "../../src/App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../src/store/reducers';

const MainView = (req, res) => {
    const context = {};

    /**
     * Sanitizing the input query string to make sure we've just integer value.
     * Also to prevent XSS.
     */
    const count = +(req.query.count) || 0;

    const preloadedState = { counter: { count } };

    // Create new store
    const store = createStore(rootReducer, preloadedState);

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.baseUrl} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    // Grab the initial state from redux store.
    const finalState = store.getState();

    // Final html output to render on client.
    const html = renderer(content, helmet, finalState);

    res.send(html);
};

const renderer = (content, helmet, preloadedState) => (`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="SSR Web site created using custom method using express, react, babel and wbpack." />
            ${helmet.meta.toString()}
            ${helmet.title.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${content}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="client_bundle.js"></script>
        </body>
    </html>
`);

export default MainView;