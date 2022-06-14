//import conmponents
import Nav from "./components/Nav";
import Index from "./view/Index";
import Menu from "./view/Menu";
import MidMenu from "./view/MidMenu";
import Drinks from "./view/Drinks";
import Dezerts from "./view/Dezerts";

// import react needs
import { Route,Routes, } from 'react-router-dom'

//data

function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/Poledni_menu" element={<MidMenu />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Napojovy_listek" element={<Drinks />} />
          <Route path="/Dezerty" element={<Dezerts />} />
          <Route path="/Kontakt" element={<a>Kontakt</a>} />
          
      </Routes>
    </div>
  );
}

export default App;
