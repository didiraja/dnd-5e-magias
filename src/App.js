import React, { useState } from "react";
import "./App.scss";
import SpellsList from './docs/spells.json'
import * as JsSearch from 'js-search';
import SpellCard from './components/SpellCard.js'

const SearchEngine = new JsSearch.Search('SpellName');

SearchEngine.addIndex('SpellName');
SearchEngine.addIndex('Classes');
SearchEngine.addIndex('Description');
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
      <header className="App-header">
        <h1>
          {'Grimório de Magias para Dungeons and Dragons - 5e'}
        </h1>
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
          spells.length > 0 && spells.map((spell, i) => {
            return (<SpellCard {...spell} key={i} />)
          })
        }
      </div>

    </div>
  );
}

export default App;
