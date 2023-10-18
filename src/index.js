import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
/* GLOBAL VARIABLES */

window.$primaryLanguage = 'fr';
window.$secondaryLanguage = 'en';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

/* sauvegarder si le site est ou non en darkmode */
if (!localStorage["theme"]) {
    localStorage["theme"] = "light";
} else if (localStorage["theme"] === "dark") {
    localStorage["theme"] = "dark";
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    body.setAttribute(dataThemeAttribute, localStorage["theme"]);
}

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.register();
