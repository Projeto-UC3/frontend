import styles from "../Beneficios/Beneficios.module.css";

function Beneficios() {
  return (
    <main className={styles.containerMain}>
    
      <section className={styles.primarySection}>
        <div>
          <img className={styles.image} src="./assets/images/profN.png" alt="" />
        </div>
        <div className={styles.conteudo}>
          <h1 className={styles.titulo}>POR QUE TER NOSSA FUNÇÃO NA SUA ESCOLA?</h1>
          <p className={styles.paragrafoBeneficio}>
            Imagine uma escola onde a segurança dos alunos é garantida a todo
            momento. Com o Nexus, você tem isso ao alcance de um clique! Nossa
            plataforma inovadora permite o monitoramento em tempo real,
            mostrando onde os alunos estão e se estão fora de sala de aula.
            Proporcionamos mais tranquilidade para pais e responsáveis e uma
            gestão mais eficiente para as escolas.
          </p>
        </div>
      </section>

      <section className={styles.secundarySection}>
        <div className={styles.containerImage}>
          <img className={styles.icones} src="./assets/images/img1_beneficio.png" alt="" />
        </div>
        <div className={styles.containerImageCenter}>
          <img className={styles.icones} src="./assets/images/img2_beneficio.png" alt="" />
        </div>
        <div className={styles.containerImage}>
          <img className={styles.icones} src="./assets/images/img3_beneficio.png" alt="" />
        </div>
        
      </section>

        <h1 className={styles.beneficio}>BENEFÍCIOS:</h1>
      <section className={styles.tertiarySection}>
        <div className={styles.containerInfo}>
          <img className={styles.icons} src="./assets/images/tranquilidade.svg" alt="" />
          <h1 className={styles.tituloTertiaty}>TRANQUILIDADE</h1>
          <p className={styles.paragrafo}>O sistema oferece informações precisas sobre a localização dos estudantes, proporcionando mais tranquilidade para pais e responsáveis.</p>
        </div>
        <div className={styles.containerInfoCenter}>
          <img className={styles.icons} src="./assets/images/seguranca.svg" alt="" />
          <h1 className={styles.tituloTertiaty}>SEGUNRANÇA EM TEMPO REAL</h1>
          <p className={styles.paragrafo}>Ao saber imediatamente se um aluno não está na sala de aula ou fora de sua área de segurança, as equipes escolares podem agir rapidamente para resolver qualquer situação de risco</p>
        </div>
        <div className={styles.containerInfo}>
          <img className={styles.icons} src="./assets/images/localizacao.svg" alt="" />
          <h1 className={styles.tituloTertiaty}>LOCALIZAÇÃO</h1>
          <p className={styles.paragrafo}>Com o Look-ID, escolas e pais podem monitorar a localização dos alunos em tempo real, garantindo mais controle e segurança no ambiente escolar.</p>
        </div>
      </section>
      
    </main>
  );
}
export default Beneficios;
