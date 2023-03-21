import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Frame } from './components/Frame';
import { hexToRGBA } from './utils/colors';
import { fromCamelCase } from './utils/other';

function App() {
  return (
    <div className="App">
      <h1>Strategies of using/converting JS modules for your TS solution</h1>
      <div className="Scroller"></div>
    </div>
  );
}

export default App;
