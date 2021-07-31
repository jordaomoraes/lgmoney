import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />

      {/* importa os estilos como que fosse um componente */}
      <GlobalStyle /> 
    </>
  );
}



  