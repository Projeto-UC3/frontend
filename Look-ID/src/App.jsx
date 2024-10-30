import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Corpo from "./components/header/Corpo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Servicos from "./components/Servicos/Servicos";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Beneficios from "./components/Beneficios/Beneficios";

function App() {
  return (
    <main className="h1-h1">
      <Router>
        <Header />
        <Routes>
          <Route path='Doe' element={<NavBar />} />
          <Route path='/' element={<Corpo />} />
          <Route path='Servicos' element={<Servicos />} />
          <Route path='Somos' element={<QuemSomos />} />
          <Route path='beneficios' element={<Beneficios />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
