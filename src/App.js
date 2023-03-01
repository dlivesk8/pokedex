import React, {useEffect, useState} from 'react'
import {Provider} from 'react-redux'
import redux from './redux'
import Pokedex from './pages/pokedex/Pokedex'

function App() {
  const [title, setTitle] = useState(document.title)

  useEffect(() => {
    window.addEventListener('blur', () => {
      setTitle(document.title)
      document.title = '¡No te vayas!'
    })
  }, [])

  useEffect(() => {
    window.addEventListener('focus', () => {
      document.title = title
    })
  }, [])

  return (
    <Provider store={redux}>
      <Pokedex />
    </Provider>
  )
}

export default App
