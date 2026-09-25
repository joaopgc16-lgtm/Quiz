import { useEffect, useState } from "react";
import Page1 from "./pages/Page1";
import { Outlet, useNavigate } from 'react-router-dom';
import gabarito from './componentes/gabarito'

function App(){
const [resposta, setResposta] = useState(null)
const [pontuação, setPontuação] = useState(0)
const navigate = useNavigate();

useEffect(() => {
        navigate('/');
    }, []);

function confirmar(pag){
  if(resposta === gabarito[pag]){
    setPontuação(pontuação + 1)

  }setResposta(null)
}

  return(
    <Outlet context={{resposta, setResposta, pontuação, setPontuação, confirmar}}/>
  )
}
export default App;