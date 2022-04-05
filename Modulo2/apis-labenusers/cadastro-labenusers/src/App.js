import React from "react";
import {CadastroUsuario} from "./components/CadastroUsuario";
import {ListaUsuarios} from "./components/ListaUsuarios";

class App extends React.Component{
  
  state={
    id: "",
    name: "",
    email:""

  }
  
  render(){
    
    return(
      <div>

        <h1>Sistema de Cadastro Labenusers</h1>
        <CadastroUsuario/>
        
          
        
       

      </div>
    );
  }
  
}

export default App;



