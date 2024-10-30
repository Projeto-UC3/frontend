import styles from '../section/Section.module.css';
import SecundaryButton from '../Buttons/SecundaryButton';
import { Link } from 'react-router-dom';

function Section() {
    return(
        <>
            <div className='super-caa'>
                <h1  style={{textAlign: 'center'}}>Sistema de Cadastro de Estudantes</h1>
                <label htmlFor="nome">Cadastrar Novo Aluno:</label><br />
                <div className={styles.buttt}>
                    <input type="text" name="nome" id="nome" placeholder='Nome do aluno:'/>
                    <div>   
                        <Link to='/cadastro'>
                            <SecundaryButton text="Cadastrar Aluno"/>
                        </Link>
                    </div>
                </div>

                <div>
                    <h2>Validação</h2>
                    <Link to='/validacao'>
                        <SecundaryButton text="Validar acesso"/>
                    </Link>
                </div>

                <h2>Lista de Alunos</h2>
                <Link to='/lista-alunos'>
                    <SecundaryButton text="Lista de alunos"/>
                </Link>
                
            </div>
        </>
    );
}

export default Section;
