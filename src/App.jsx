import './App.css';
import Navbar from './components/pages/navbar/Nabvar'
import CardIterms from './components/ui/cardItems/CardIterms';
import Footer from './components/pages/footer/Footer'

function App() {
return (
  <>
    <Navbar/>
    <CardIterms customClassCard={'card'}/>
    <Footer/>
  </>
  );
}

export default App;
