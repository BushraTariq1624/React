import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Countbutton() {
  const [count , setcount] = useState(0)
  const navigate = useNavigate()
  
  useEffect(() => {
    console.log("from useEffect");
  },[handlecount])
  


  function handlecount() {
    setcount(count+1)
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handlecount}>
          count is {count}
        </button>
        <button onClick={() => navigate("/about") }>
          Go to about page
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Countbutton
