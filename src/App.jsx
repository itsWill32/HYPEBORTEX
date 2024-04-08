import './App.css';
import Navbar from './components/pages/navbar/Nabvar';
import Login from './components/pages/login/Login';
import Footer from './components/pages/footer/Footer';
import Home from './pages/home/Home';
import FilterItems from './components/ui/filterItems/FilterItems';
import Clothing from './pages/clothing/Clothing';

import { useState } from 'react';

  
  function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
    return (
      <>
        <Navbar openLogin={() => setIsLoginModalOpen(true)} />
        <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
        <Home />
        <Footer/>
      </>
    );
  }
  
  export default App;
