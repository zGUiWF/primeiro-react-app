import Header from "./components/Header";
import TitleWithText from "./components/TitleWithText";
import Footer from "./components/Footer";

function App() {
  return(
    <>
    <Header/>

    <TitleWithText 
    title="Titulo do bloco" 
    content={"Conteudo do primeiro bloco"}
    />

    <TitleWithText 
    title="Outro titulo"
    content={"Outra descrição"}
    />

    <Footer author={"Guilherme Winck Ferrari"}/>

    </>
  );
}

export default App
