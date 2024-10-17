import styles from '../navBar/NavBar.module.css'
import PrimaryButton from '../Buttons/PrimaryButton'
function NavBar() {
    return (
        <nav className={styles.navbar}>
            <PrimaryButton
                text='Cadastrar Aluno' />
            <PrimaryButton
                text='Validação' />
            <PrimaryButton
                text='Lista de Alunos' />
            <PrimaryButton
                text='Alterar Senha' />

        </nav>
    )
}
export default NavBar