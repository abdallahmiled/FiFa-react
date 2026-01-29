import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Page from './components/Page';

import Suggestions from './components/Suggestions';
import NewNews from './components/NewNews';
import Equipe from './components/Equipe';
import ArierePlan from './components/ArierePlan';
import Footer from './components/Footer'
function App() {
  const players = [
    
 
    { name: "Thibaut Courtois", age: 31, nationality: "Belgium", image: "" },
    { name: "Andriy Lunin", age: 23, nationality: "Ukraine", image: "" },
    { name: "Fran González", age: 27, nationality: "Spain", image: "" },
    { name: "Javier Navarro", age: 24, nationality: "Spain", image: "" },

]
  return (
    <div className="App">
     <Navbarr/> 
    <Page/>  
     <div className='article'>
      <NewNews/>  
      <Suggestions players={players}/>
      
    </div> 
     <Equipe/> 
     <ArierePlan/> 
    <Footer/>
    
    </div>
  );
}

export default App;
