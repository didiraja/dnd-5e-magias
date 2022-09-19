import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import SpellsList from './docs/spells.json'
import * as JsSearch from 'js-search';
import SpellCard from './components/SpellCard.js'

const SearchEngine = new JsSearch.Search('SpellName');

SearchEngine.addIndex('Description');
SearchEngine.addIndex('Classes');
SearchEngine.addDocuments(SpellsList);

const App = () => {

  const [spells, setSpells] = useState(SpellsList);

  const handleSearch = (query) => {

    if (query.length < 3)

      return setSpells(SpellsList)

    const result = SearchEngine.search(query);
  
    return setSpells(result);
  };

  return (
    <div className="App">
      <header className="App-header my-12">

        <div className="logo">
          <h1 className="text-5xl font-bold">
          {'Lista de Magias - D&D 5e'}
          </h1>
        </div>
      </header>

      <div className="input-wrapper my-6">
        <input
          type="text"
          placeholder="Busque alguma magia"
          className="search w-full w-[90%] h-10 rounded-sm"
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      <div className="spells-wrapper w-[90%] my-0 mx-auto">
        {
          spells.length > 0 && spells.map((spell) => {
            return (<SpellCard {...spell} />)
          })
        }
      </div>

    </div>
  );
}

export default App;
