import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar/navbar.css";
import Navbar from "./components/Navbar/navbar";
import Main1 from "./components/Mainsection/Main1/main1";
import Main2 from "./components/Mainsection/Main2/main2";
import Main3 from "./components/Mainsection/main3/main3";
import Main4 from "./components/Mainsection/Main4/main4";
import Cards from "./components/Mainsection/Card/cards";
import Main5 from "./components/Mainsection/Main5/main5";
import Main6 from "./components/Mainsection/Main6/main6";
import Main7 from "./components/Mainsection/Main7/main7";


function App() {
  return (
    <>
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Cards />
      <Main5/>
      <Main6/>
      <Main7/>
    </>
  );
}

export default App;
