import React, { useState } from 'react';
import data from './data.json';
import './App.css';

function App() {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className='container'>
      <h1 className='head'>Fenerbahce Players</h1>
      <span className='info'>
        Search with Player Name, Position, and Jersey Number
      </span>
      <div className='inputContainer'>
        <input
          className='search-bar'
          type='text'
          onChange={handleChange}
          placeholder=' '
        />
      </div>

      <div className='dataContainer'>
        {data
          .filter((val) => {
            if (searchItem === '') {
              return val;
            } else if (searchItem === val.name) {
              return val;
            } else if (searchItem === val['Forma Numarası']) {
              return val;
            } else if (searchItem === val.Pozisyon) {
              return val;
            }
            return null;
          })
          .map((val) => (
            <div className='data' key={val.id}>
              {/* Resimleri Web URL'leriyle Yükleme */}
              <img className='img' src={val.Img} alt={val.name} />

              {/* Resimleri Yerel Olarak Yükleme */}
              {/* <img className='img' src={process.env.PUBLIC_URL + val.Img} alt={val.name} /> */}
              
              <h3>{val.name}</h3>
              <h4>{val.Pozisyon}</h4>
              <h5>{val['Forma Numarası']}</h5>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
