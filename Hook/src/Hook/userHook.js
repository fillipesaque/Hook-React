import { useState } from "react"

/* Sempre Lmebrar de importar o arquivo useState */

function Contador (){
    const [count , setCount] = useState(0)

    const Aumentar = () => {
        setCount(count +1)
    }

    const Diminuir = () => {
        setCount(count -1)
    }

    return{count , Aumentar , Diminuir}
}

export default Contador