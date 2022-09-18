import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import SpellsList from './docs/spells.json'
import * as JsSearch from 'js-search';

// SpellName
// Classes
// Level
// School
// Ritual
// Concentration
// Verbal
// Somatic
// Time
// Reach
// Material
// Duration
// Description
const SearchEngine = new JsSearch.Search('SpellName');

SearchEngine.addIndex('Description');
SearchEngine.addIndex('Classes');
SearchEngine.addDocuments(SpellsList);

const App = () => {

  const [spells, setSpells] = useState(SpellsList);

  const searchSpell = (query) => {

    const result = SearchEngine.search(query);
  
    setSpells(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <input className="search" type="text" onChange={e => searchSpell(e.target.value)} />

      <ul className="list">
        {spells.length > 0 && spells.map((spell, i) => {
          return <li key={i}>{spell.SpellName} - {spell.Classes}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
