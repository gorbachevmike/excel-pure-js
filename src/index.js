import './scss/index.scss';
import './scss/dashboard.scss';
import './scss/header.scss';
import './scss/formula.scss';
import './scss/table.scss';
import './scss/toolbar.scss';
import {$} from './core/dom';

const app = $('#app');
const el = $.create('h1');
el.insert('Hello World');
app.append(el);
el.addClass('text__red');
el.on('click', () => alert('HI'));
console.log('working!!');
