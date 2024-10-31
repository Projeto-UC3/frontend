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
            <h1>Cadastrar Alunos</h1>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AlunosCadastrados;
 