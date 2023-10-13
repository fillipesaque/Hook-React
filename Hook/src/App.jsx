import { useState } from 'react'
import Contador from './Hook/userHook'


function App() {
const {count  , Aumentar , Diminuir} = Contador(0) 
/* Hook Modificado chamado na topo da funçao do msm jeito q o normal */

  return (
    <>
      {/* O que são hooks? São funções específicas do React para “entrar” ou se conectar ao seu sistema interno.
          Além disso, o React segue o padrão de nomear os hooks sempre com o prefixo “use”, por exemplo, “useState”, “useRef”, “useEffect”, “useMemo”, etc. 
                  REGRAS DO HOOK
          1- você só pode chamar um hook em uma função que é um componente React
          2- você só pode chamar um hook no top-level da função
      */}




      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={Aumentar}>
          Aumentar {count}
        </button>
        <button onClick={Diminuir}>
          Diminuir {count}
        </button>
      </div>
    </>
  )
}

export default App
