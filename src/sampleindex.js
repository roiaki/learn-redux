import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";


//reducer -> アクションと前の状態を組み合わせて新しい状態に更新する
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT": 
      return state + 1;
    case "DECREMENT": 
      return state - 1;
  }
};

//store
let store = createStore(counterReducer);

//actions -> incrememt, decrement
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//コンソールに新しい状態を出力
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
