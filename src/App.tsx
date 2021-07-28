import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />

      {/* importa os estilos como que fosse um componente */}
      <GlobalStyle /> 
    </>
  );
}



  