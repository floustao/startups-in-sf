import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CardList from './CardList';
import { artworks } from './artworks';

ReactDOM.render(<CardList artworks={ artworks }/>,document.getElementById('root'));
registerServiceWorker();
