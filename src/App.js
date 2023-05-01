import React, {useState, useEffect} from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {


  const [tema, setTema] = useState(true)
//  console.log(tema)

  const toggleTema = () => {
    setTema((tema) => !tema)
//    console.log(tema)
  }

  //Tarea: Utilizar localStorage para guardar el fondo que el usuario utilizo por ultima vez

  useEffect(() => {
    const TemaInicial = localStorage.getItem('TemaInicial')
    if (TemaInicial){
      setTema(JSON.parse(TemaInicial))//convertimos lo que este almacenado en formato JavaScript y lo establecemos como el valor que debe contener
    }
    //  console.log(TemaInicial)
  }, [])

  useEffect(() => {
    localStorage.setItem('TemaInicial', JSON.stringify(tema))
    //console.log(localStorage)
  }, [tema])

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
