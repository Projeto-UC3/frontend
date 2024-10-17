import styles from '../navBar/NavBar.module.css'
import PrimaryButton from '../Buttons/PrimaryButton'
function NavBar() {
    return (
        <nav className={styles.navbar}>
            <PrimaryButton
                text='Cadastrar Aluno' />

        </nav>
    )
}
export default NavBar