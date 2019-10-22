import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*
TESTING KEY COMMANDS
DELETE --> Quickly clear the Local Storage
'='    --> Console.log() the Local Storage
*/
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 8) {
        console.log('LOCAL STORAGE WAS CLEARED!');
        localStorage.clear();
        console.log(window.localStorage);
        console.log('-------------------------');
    }
    if (e.keyCode === 187) {
        console.log('LOCAL STORAGE:');
        console.log(window.localStorage);
        console.log('-------------------------');
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();