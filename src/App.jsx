import { useState } from 'react'
import data from './data.json'
import './App.css'

function App() {
  
  const [searchItem, setItem] = useState("")

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  const handleFocus = () => { }

  return (
    <div className='container'>
      <h1 className='head'>Fenerbahce Players</h1>
      <span className='info'>Search with Player Name , Position and Jersey Number </span>
      <div className='inputContainer'>
        <input
          className='search-bar'
          type='text'
          onChange={handleChange}
          placeholder=' '

    
        />
      </div>

      <div className='dataContainer'>
        {
          data.filter((val) => {

            if (searchItem == "") {
              return val;//Boşsa search datanın içindeki tüm değerleri döndür

            }
            else if (searchItem == val.name) {
              return val;

            }
            else if (searchItem == val['Forma Numarası']) {
              return val;
            }
            else if (searchItem == val.Pozisyon) {
              return val;
            }
          }).map((val) => {
            return (
              <div className="data" key={val.id}>
                <img className='img' src={val.Img} ></img>
                <h3>{val.name}</h3>
                <h4>{val.Pozisyon}</h4>
                <h5>{val['Forma Numarası']}</h5>

              </div>
            )
          })

        }
      </div>
    </div>
  )
}

export default App
