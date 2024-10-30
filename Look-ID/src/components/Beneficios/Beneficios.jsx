import styles from "../Beneficios/Beneficios.module.css";
import Header from "../header/Header";
import img28 from "../../../public/assets/images/image 28.png";
function Beneficios() {
  return (
    <>
      <Header />
      <div className={styles.teste}>
        <div>
          <img src={img28} alt="" />
        </div>
        <div>
          <h1>Por que ter nossa função na sua escola?</h1>
          <p>
            Imagine uma escola onde a segurança dos alunos é garantida a todo
            momento. Com o Nexus, você tem isso ao alcance de um clique! Nossa
            plataforma inovadora permite o monitoramento em tempo real,
            mostrando onde os alunos estão e se estão fora de sala de aula.
            Proporcionamos mais tranquilidade para pais e responsáveis e uma
            gestão mais eficiente para as escolas.
          </p>
        </div>
      </div>
    </>
  );
}
export default Beneficios;
