import './App.css';
import Navbar from './components/pages/navbar/Nabvar';
import CardItems from './components/ui/cardItems/CardIterms';
import Footer from './components/pages/footer/Footer'
import Login from './components/pages/login/Login';
import { useState } from 'react';

  
  function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
    return (
      <div>
        <Navbar openLogin={() => setIsLoginModalOpen(true)} />
        <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      </div>
    );
  }
  
  export default App;
