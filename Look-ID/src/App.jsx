import NavBar from './components/navBar/NavBar'
import './App.css'
import Section from './components/section/Section'
import Header from './components/header/Header'
import AlunosCadastrados from './pages/AlunosCadastrados'
function App() {
  return (
    <main>
      <NavBar />
      <AlunosCadastrados/>
    </main>
  )
}

export default App
