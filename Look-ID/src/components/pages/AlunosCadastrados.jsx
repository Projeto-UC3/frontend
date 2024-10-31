import Style from "../Styles/AlunosCadastrados.module.css";
import Alunos from "./AlunosComponent";
import Lupa from "../../../public/assets/images/search.svg";
import NavBar from "../navBar/NavBar";


function AlunosCadastrados() {
  return (
    <section className="sec-principal">
      <div className={Style.mainContainer}>
        <NavBar />
        <section className={Style.container}>
          <div className={Style.divTitle}>
            <h1>Lista de Alunos Cadastrados</h1>
          </div>
          <div className={Style.title}>
            <h3>Nome</h3>
            <div className={Style.title2}>
              <h3>ID</h3>
              <h3>Turma</h3>
            </div>
          </div>
          <div className={Style.alunosSection}>
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            <Alunos nome="Gabriel Almeida Costa" ra="123.456.789" turma="Equipe 1" />
            {/* Adicione outros componentes Alunos conforme necessário */}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AlunosCadastrados;
 