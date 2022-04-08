import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/form2';
import Form3 from './components/form3';
import Final from './components/final';
import styled from 'styled-components';

export class App extends React.Component {
  
  state ={
    formulario:1,
  }

  renderizaEtapa = () => {
    switch (this.state.formulario) {
      case 1:
        return <Form1/>;
        
      case 2:
        return <Form2/>;
        
      case 3:
        return <Form3/>;
        
      case 4:
        return <Final/>;
      
      default:
        return <Final/>;
      
    }
  };
  
  render() {
    return (

      <div className="App">

        <div>
          {this.renderizaEtapa()}
          <button>Próxima Etapa</button>
        </div>       
        
      </div>
    );
  }
}
  
export default App;
