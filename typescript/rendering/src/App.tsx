import { useState } from 'react'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <>
      <button onClick={() => setSigned(true)}>Entrar</button>
      <br />
      {signed && (
        <div>
          <h1>Bem vindo Eduardo!</h1>
          <p>Usuário Online!</p>
          <button onClick={() => setSigned(false)}>Sair</button>
        </div>
      )}
    </>
  )
}

export default App
