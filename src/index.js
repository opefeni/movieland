// import react libraries
import React from 'react';
//import ReactDOM   from 'react-dom';
import  ReactDOM  from 'react-dom/client';


// import main App
import App from './App';

// render to dom
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//ReactDOM.render(<App />, document.getElementById('root'));

