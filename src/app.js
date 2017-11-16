import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import IndecisionApp from './components/IndecisionApp';
        
ReactDOM.render(<IndecisionApp options = {['One', 'Two', 'Three']}/>, document.getElementById('app'));
    