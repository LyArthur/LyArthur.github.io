import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {check_borders} from './functions/about/checkBordersCards';
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
    document.body.setAttribute(dataThemeAttribute, localStorage["theme"]);
}
localStorage["z-index"] = 1;
if (localStorage["language"] === undefined){localStorage["language"] = 'fr'}
window.addEventListener("resize", check_borders)
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.register();

