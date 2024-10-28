import styles from '../section/Aluno.module.css'
import Grafico from '../grafico/grafico'
import Grafico2 from '../grafico/grafico2'

function Aluno() {
    return (
        <section className={styles.section_aluno}>

        <div className={styles.tudo}>
            <div className={styles.foto_aluno}><p>Aluno</p></div>   
            <div className={styles.ola}>
                <h1>Olá, Guilherme Martins Fernandes!</h1>
                <p className={styles.p1}>Última entrada: 13/09 - 07h01  </p> <p className={styles.p3}>Última Saída: 13/09 - 13h00 </p>
                <p className={styles.p2}>Frequência Escolar: Compareceu a 164 dias de aula </p>
            </div>
        </div>
            <div className={styles.FreqEscolar}>Frequência Escolar</div>

            <div className={styles.tudo2}>

            <div className={styles.grafico}>
                <div className={styles.faltas}>Faltas</div>
                <Grafico />
            </div>

            <div className={styles.grafico2}>
            <div className={styles.presenca}>Presença</div>
            <div className={styles.falta}>Falta: 6,3%</div>
            <Grafico2/>
            <div className={styles.presenca2}>Presença: 93,7%</div>



            </div>


            </div>
       


        </section>
    );
}

export default Aluno;
