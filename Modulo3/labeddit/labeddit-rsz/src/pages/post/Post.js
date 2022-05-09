import React from "react";

import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

import { Tela2 } from "../../global/GlobalStyles";

export default function Post() {
  return (
    <Tela2>
      <p>Post Tá On</p>


      {/* Soma ao numero de comentarios */}
      <SquareButton>
          Responder
      </SquareButton>     
    </Tela2>
  );
}