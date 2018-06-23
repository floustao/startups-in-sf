import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import {artworks} from './artworks';

ReactDOM.render(<Card id={artworks[0].id} image={artworks[0].image} style={artworks[0].style}/>, document.getElementById('root'));
registerServiceWorker();
