import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.getElementById('root'));
root.render
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);