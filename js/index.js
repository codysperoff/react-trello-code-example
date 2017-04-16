require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
        ReactDOM.render(<Board className="board" title="Board" />, document.getElementById('app'))
);
