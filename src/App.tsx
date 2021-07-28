import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <h1> Olá Mundo!</h1>

      {/* importa os estilos como que fosse um componente */}
      <GlobalStyle /> 
    </div>
  );
}



  