import styles from '../section/Section.module.css'
import SecundaryButton from '../Buttons/SecundaryButton'
function Section() {
    return(
        <>
            <section>
                <h1>Sistema de Cadastro de Estudantes</h1>
                <label htmlFor="nome">Cadastrar Novo Aluno:</label><br />
                <div className={styles.buttt}>
                    <input type="text" name="nome" id="nome" placeholder='Nome do aluno:'/>
                    <div>   
                        <SecundaryButton text="Cadastrar Aluno"/>
                    </div>
                </div>

                <div >
                    <h2>Validação</h2>
                    <SecundaryButton text="Validar acesso"/>
                </div>

                <h2>Lista de Alunos</h2>
                <SecundaryButton text="Lista de alunos"/>
                
            </section>
        </>
    )
}

export default Section