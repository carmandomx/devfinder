import { useState, useEffect } from 'react';
import { fetchData } from './services'
import Search from './components/Search';
import MainCard from './components/MainCard';
import { Mode } from './context'
import './App.css'



function App() {
  const [state, setState] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [hasError, setHasError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      setHasError(false);
      setState(null);
      fetchData(searchTerm).then((res) => {
        setState(res.data)
      }).catch(() => {
        setHasError(true);
      })
    }
  }, [searchTerm])

  return (
    <Mode.Provider value={theme}>


      <div className='App' style={{ backgroundColor: theme === 'dark' ? '#141c2f' : "#fff" }}>
        <div className='Main-Container'>
          <div className='Header'>
            <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>devfinder</h2>
            <button className='theme-toggle' style={{ color: theme === 'dark' ? '#fff' : '#000' }} onClick={() => setTheme((prev) => prev === 'dark' ? 'light' : 'dark')} > { theme }</button>
          </div>
          <Search searchValue={searchTerm} updateSearchValue={setSearchTerm} />
          {state && (<MainCard data={state} />)}
          {hasError && (
            <div className='errorContainer' style={{ backgroundColor: theme === 'dark' ? '#1f2a48' : "#333" }} >
              User { searchTerm } not found!
            </div>
          )}
          
          </div>
          
      </div>

    </Mode.Provider>
  )
}

export default App
