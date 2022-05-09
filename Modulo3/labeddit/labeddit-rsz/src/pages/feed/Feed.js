import React from "react";

import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

import { Tela2 } from "../../global/GlobalStyles";

export default function Feed() {
  return (
    <Tela2>
      <p>Feed Tá On</p>

      {/* Vai para Login */}
      <LogOutButton>
          Logout
      </LogOutButton>


       {/* Adiciona item a lista de posts */}
      <SquareButton>
          Postar
      </SquareButton>

      <ListaDePost>
          
      </ListaDePost>

      {/* Vai para post */}
      <ComentButton>
      
      </ComentButton>   
    </Tela2>
  );
}