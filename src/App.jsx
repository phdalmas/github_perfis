import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisi, setFormularioEstaVisi] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')

  const nome = 'gian';

  function retornaNome(){
    return nome;
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = true;

  return (
    <>
      <input type="text" onBlur={(e)=>setNomeUsuario(e.target.value)} />
      {nomeUsuario.length>4 && (
    <>
      <Perfil nomeUsuario={nomeUsuario} />
      <ReposList nomeUsuario={nomeUsuario}/>
    </>
      )}
    </>
  )
}
export default App
