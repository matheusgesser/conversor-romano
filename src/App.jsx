import { useState } from 'react'
import './styles/reset.css'
import './styles/base.css'
import { VscLinkExternal, VscArrowSwap } from 'react-icons/vsc'
import { toRoman, fromRoman } from 'toroman'

function App() {
  const [swapped, setSwapped] = useState(false)

  // ? Permite apenas letras numerais romanas
  function handleRomanLetter(e) {
    switch (e.keyCode) {
      case 73: // I
        break
      case 86: // V
        break
      case 88: // X
        break
      case 76: // L
        break
      case 67: // C
        break
      case 68: // D
        break
      case 77: // M
        break
      case 8: // Backspace
        break
      default:
        e.preventDefault()
    }
  }

  function update(e) {
    switch(e.target.type) {
      case 'number':
        document.getElementById('roman').value = toRoman(parseInt(e.target.value))
        if(e.target.value == '') {
          document.getElementById('roman').value = ''
        }
        break
      case 'text':
        document.getElementById('arabic').value = fromRoman(e.target.value.toString().toUpperCase())
        if(e.target.value == '') {
          document.getElementById('arabic').value = ''
        }
        break
    }
  }

  return (
    <main>
      <h1>Conversor Romano</h1>
      <a href="https://www.linkedin.com/in/matheusgesser/" target='_blank' rel='noreferrer'>
        <h2>Matheus Gesser <VscLinkExternal /></h2>
      </a>
      <span>
        <strong>{swapped ? 'Romano' : 'Árabe'}</strong>
        <VscArrowSwap className={swapped ? 'swap' : ''} onClick={() => setSwapped(!swapped)} />
        <strong>{swapped ? 'Árabe' : 'Romano'}</strong>
      </span>
      <section className={swapped ? 'container swap' : 'container'}>
        <input type='number' id='arabic' onChange={update}></input>
        <input type='text' id='roman' onChange={update} onKeyDown={handleRomanLetter}></input>
      </section>
    </main>
  )
}

export default App
