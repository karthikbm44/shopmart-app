import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () =>{
    switch(currentPage){
      case "about": return <About />;
      case "contact": return <Contact />;
      case "home": return <Home />;
      default: return <Home />
    }
  };

  return (
  <div>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <main style={{padding:"20px"}}>{renderPage()}</main>
  </div>);
}

export default App
