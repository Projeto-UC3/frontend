import NavBar from './components/navBar/NavBar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Section from './components/section/Section';
function App() {
  return (

    <main className='h1-h1'>
      <Router>
        <Header />
        <Routes>
          <Route path='Doe' element={<NavBar/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
