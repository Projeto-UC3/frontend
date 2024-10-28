import Style from "../Styles/AlunosCadastrados.module.css";
import Alunos from "./AlunosComponent";
import Lupa from "../../../public/assets/images/search.svg";
import Seta from "../../../public/assets/images/angle-down.svg";
function AlunosCadastrados() {

  return (
    <section className={Style.container}>
      <h1>Lista de Alunos Cadastrados</h1>
      <div className={Style.line}>
        <div>
          <h3>Turma</h3>
          <div className={Style.salas}>
            <select name="salas" id="salas" className={Style.salas}>
              <option value="opcao1">2º ano A</option>
              <option value="opcao2">2º ano B</option>
              <option value="opcao3">2º ano C</option>
            </select>
            <img src={Seta} alt="" />
          </div>
        </div>
        <div>
          <h3>Pesquisar Aluno</h3>
          <div className={Style.salas}>
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              className={Style.salas}
            />
            <img src={Lupa} alt="" />
          </div>
        </div>
      </div>

      <div className={Style.title}>
        <h3>Nome</h3>
        <div className={Style.title2}>
          <h3>R.A.</h3>
          <h3>Turma</h3>
        </div>
      </div>
      <div>
        <Alunos
          nome={"Gabriel Almeida Costa"}
          ra={"123.456.789-0/SP"}
          turma={"2° ano B"}
        />
        <Alunos
          nome={"Gabriel Almeida Costa"}
          ra={"123.456.789-0/SP"}
          turma={"2° ano B"}
        />
        <Alunos
          nome={"Gabriel Almeida Costa"}
          ra={"123.456.789-0/SP"}
          turma={"2° ano B"}
        />
        <Alunos
          nome={"Gabriel Almeida Costa"}
          ra={"123.456.789-0/SP"}
          turma={"2° ano B"}
        />
        <Alunos
          nome={"Gabriel Almeida Costa"}
          ra={"123.456.789-0/SP"}
          turma={"2° ano B"}
        />
        <Alunos
          nome={"Gabriel Almeida Costa"}
          ra={"123.456.789-0/SP"}
          turma={"2° ano B"}
        />
      </div>
    </section>
  );
}
export default AlunosCadastrados;
