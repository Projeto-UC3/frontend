import NavBar from "../components/navBar/NavBar_aluno"
import Aluno from "../components/section/Aluno"
import styles from "../Pages/Freq_aluno.module.css"
function freq_aluno(){
    return(
        <section className={styles.Fundo}>
            <NavBar />
            <Aluno/>
        </section>
    )
}

export default freq_aluno