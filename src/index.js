import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import App from './components/App.js'

window.React=React;

render(
  <App />, document.getElementById('react-container')
)
