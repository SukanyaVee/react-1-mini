// import [variableName] from 'libraryName' //OR './mycode' for own library
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //CSS files don't need variableName, can have specific things imported from them
import App from './App'; //.js extension is default, so not necessary to write // ../parentfolder/gotoOther
// import registerServiceWorker from './registerServiceWorker'; Windows gives trouble with this code line

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
