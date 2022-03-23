import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'

//const BorderSmall =styled.smallcard-container


function App() {
  return (
    <div className="App">

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="labedin\src\img\download20200804014654.png" 
          nome="Renata S. Zamboni" 
          descricao="Oi, eu sou a Renata. Estudante da Labenu. Antes eu pesquisava e escrevia argumentos de documentário, agora estudo para mudar de carreira para o setor de tecnologia. Quero trabalhar no backend e futuramente mexer com Aprendizado de Máquina."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://www.flaticon.com/free-icons/email" 
          nome="E-mail" 
          descricao="renataszamboni@email-fake.com" 
        />
        
        <CardPequeno 
          imagem="https://www.flaticon.com/br/icones-gratis/localizacao" 
          nome="Endereço" 
          descricao="Rua Bambu." 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="labedin\src\img\flat-movie-clapper-icon.jpg" 
          nome="Concreto Filmes" 
          descricao="Pesquisando personagens e eventos históricos e transformando eles em propostas de filmes." 
        />
        
        <CardGrande 
          imagem="labedin\src\img\CNPq_v2017_rgb.png" 
          nome="Conselho Nacional de Desenvolvimento Científico e Tecnológico" 
          descricao="Pesquisadora vinculada a Universidade Ferderal de São Paulo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

    </div>
  );
}

export default App;
