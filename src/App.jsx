import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Corpo from "./components/header/Corpo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Servicos from "./components/Servicos/Servicos";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Beneficios from "./components/Beneficios/Beneficios";
import AlunosComponent from "./components/pages/AlunosCadastrados";
import CadastrarComponent from "./components/pages/CadastrarAlunos";
import ValidarComponent from "./components/pages/Validar";
import Implementar from "./components/Implementar_escola/Implementar_escola"
import Login from "./components/Login/Login";

function AppContent() {
  const location = useLocation();
  const isFrequenciaRoute = location.pathname === '/frequencia' || location.pathname === '/cadastro' || location.pathname === '/listaalunos' || location.pathname === '/validar';

  return (
    <>
      {!isFrequenciaRoute && <Header />}
      <Routes>
        <Route path='/cadastro' element={<CadastrarComponent />} />
        <Route path='/Servicos' element={<Servicos />} />
        <Route path='/listaalunos' element={<AlunosComponent />} />
        <Route path='/validar' element={<ValidarComponent />} />
        <Route path='/beneficios' element={<Beneficios />} />
        <Route path='/implementar' element={<Implementar />} />
        <Route path='/' element={<Corpo />} />
        <Route path='Somos' element={<QuemSomos />} />
        <Route path='entrar' element={<Login />} />
      </Routes>
      {!isFrequenciaRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <main className="h1-h1">
      <Router basename="/frontend/">
        <AppContent />
      </Router>
    </main>
  );
}

export default App;
