import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [text, setText] = useState('') 
  const [maat, setMaat] = useState([]) 
  const [filteredMaat, setFilteredMaat] = useState([]) 
  const [valittuMaa, setValittuMaa] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setMaat(response.data)
      })
  }, [])

 
  const handleChange = (event) => {
    const searchText = event.target.value
    setText(searchText)

    const filtered = maat.filter(maa =>
      maa.name.common.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredMaat(filtered)

 
    if (filtered.length === 1) {
      setValittuMaa(filtered[0])
    } else {
      setValittuMaa(null) 
    }
  }

  const renderMaaDetails = () => {
    if (!valittuMaa) return null 

    const flagUrl = valittuMaa.flags.png
    return (
      <div>
        <h2>{valittuMaa.name.common}</h2>
        <p>Capital: {valittuMaa.capital}</p>
        <p>Area: {valittuMaa.area} km²</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(valittuMaa.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={flagUrl} alt={`${valittuMaa.name.common} flag`} style={{ width: '100px' }} />
      </div>
    )
  }

  const renderMaat = () => {
    if (filteredMaat.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    return (
      <div>
        {filteredMaat.map((maa) => (
          <p key={maa.name.common}>
            {maa.name.common}{' '}
            {filteredMaat.length > 1 && (
              <button onClick={() => setValittuMaa(maa)}>showt</button>
            )}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      /> 
      {renderMaat()}
      {renderMaaDetails()}
    </div>
  )
}

export default App
