//PAGINA LOGIN
//Botao Continuar
export const vaiParaFeed = (navigate) => {
    navigate("/Feed")
}

//Botao Cria conta
export const vaiParaCadastro= (navigate) => {
    navigate("/Cadastro")
}

//PAGINA CADASTRO
//Botao Entrar
export const vaiParaLogin = (navigate)=>{
    navigate("/")
}
//OU
// export const goBack = (navigate) =>{
//     navigate(-1)
// }

//Botao Cadastrar: repete vaiParaFeed

//PAGINA FEED
//Botao Logout: repete vai para login

//Botao Comentario
export const vaiParaPost = (navigate) =>{
    navigate("/Feed/Post")
}

//PAGINA POST
//Botao Logout: repete vai para login

//Botao X: repete vai para Feed


