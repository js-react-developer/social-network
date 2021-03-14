import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { addPost } from './redux/state'
import App from './App';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}