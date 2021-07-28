import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle` 
:root {
   
    --background : #f0f2f5;
    --red :#E52E4D;
    --blue :#5429cc;
    --blue-light :#6933ff;
    --text-title :#363f5f;
    --blue-body :#969cb3;
    --shape :#ffffff;

}

* {
  margin :0;
  padding:0;
  box-sizing :border-box;
}

body {
  background : var(--background);
  //deixar as fontes com mais detalhes, mais nitidas
  -webkit-font-smoothing : antialiased;
}
// definir a fonte como padrão nos componentes e o tamanho
body, input, textarea,button {
 font-family :'Poppins', sans-serif;
 font-weight: 400;
 }
//aqui vai colocar negrito em todos os h1
 h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
 }

html {

  // aqui diminiu o tamanho da fonte com tela de até 1080px
  //max-width é quando a tela for menor que o numero

  //diminiu para quando usar o rem, toda a aplicação ir se ajustando junto
  //já que toda a aplicação vai levar em conta o REM

  //usar percentual pra previnir que o usuario use o aumentar e diminuir a fonte
    @media (max-width : 1080px){
      font-size : 93.75%; //15px
    }
    @media (max-width : 720px){
    font-size :87.5%; //14px
    }
//1 REM =  TAMANHO FONTE SIZE DA PAGINA
}

button {
cursor: pointer;
}

//pra tudo que estiver desabilitado, deixar com pouca opacidade e o cursor mudar  
[disabled] {
opacity :0.6;
cursor :not-allowed;

}

`;



