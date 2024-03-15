import './App.css';
import Nabvar from './components/pages/navbar/Nabvar';
import CardItems from './components/ui/cardItems/CardIterms';
import Footer from './components/pages/footer/Footer'
import Login from './components/pages/login/Login';
import Register from './components/pages/Register/Register';

function App() {
return (
  <>
    <Nabvar />
    <Login />
    <Register />
    <CardItems customClassCard={'card'} />
    <Footer />
  </>
  );
}

export default App;