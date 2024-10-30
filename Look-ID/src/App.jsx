import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Corpo from "./components/header/Corpo";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import Servicos from "./components/Servicos/Servicos";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Beneficios from "./components/Beneficios/Beneficios";
import AlunosComponent from "./components/pages/AlunosCadastrados";
import Implementar from "./components/Implementar_escola/Implementar_escola"
import Section from "./components/section/Section";
import Login from "./components/Login/Login";

function App() {
  return (
    <main className="h1-h1">
      <Router>
        <Header />
        <Routes>
          <Route path='/cadastro' element={<Section />} />
          <Route path='/Servicos' element={<Servicos />} />
          <Route path='/frequencia' element={<AlunosComponent/>} />
          <Route path='/beneficios' element={<Beneficios />} />
          <Route path='/implementar' element={<Implementar />} />
          <Route path='/' element={<Corpo />} />
          <Route path='Somos' element={<QuemSomos />} />
          <Route path='entrar' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
      
    </main>
  );
}

export default App;
