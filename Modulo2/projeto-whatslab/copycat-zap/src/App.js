import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    mensagens: [
      {
        usuario: "",
        mensagem: ""

      }
    ],

    usuarioUm: "",
    mensagemUm: ""
  }

  onChangeUsuarioValor = (event) => {
    this.setState({ usuarioUm: event.target.value })

  }

  onChangeMensagemValor = (event) => {
    this.setState({ mensagemUm: event.target.value })

  }

  onClickBotaoEnviar = () => {
    const usuario = {
      usuario: this.state.usuarioUm,
      mensagem: this.state.mensagemUm
    }

    //this.state.mensagens.push(usuario) ou ...spread

    const imprimeMensagem = [...this.state.mensagens, usuario]

    this.setState({ mensagens: imprimeMensagem, usuarioUm: "", mensagemUm: "" })


  }

  render() {

    const mensagemTela = this.state.mensagens.map((texto) => {
      return (
        
        <div className="caixaMessagens">
          <p className="entraNome">{texto.usuario}</p>
          <p className="entraMsg">{texto.mensagem}</p>
        </div>
      )

    })


    return (

      <div className="CaixaApp">

        <div>
          <input placeholder="Nome" value={this.state.usuarioUm} onChange={this.onChangeUsuarioValor} />
          <input placeholder="Mensagem" value={this.state.mensagemUm} onChange={this.onChangeMensagemValor} />

          <button className="botaum" onClick={this.onClickBotaoEnviar}>Enviar</button>
          {mensagemTela}

        </div>

      </div>
    )
  }

}

export default App;