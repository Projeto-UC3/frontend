import styles from '../navBar/NavBar.module.css'
import PrimaryButton from '../Buttons/PrimaryButton'

//Import icons from navbar
import user from '../../../public/assets/images/user.svg'
import id from '../../../public/assets/images/id.svg'
import book from '../../../public/assets/images/book.svg'
import exit from '../../../public/assets/images/exit.svg'
import logo from '../../../public/assets/images/logotipo.svg'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="" />
            <PrimaryButton
                icon={user}
                text='Cadastrar Aluno' />
            <PrimaryButton
                icon={id}
                text='Validação' />
            <PrimaryButton
                icon={book}
                text='Lista de Alunos' />
            <PrimaryButton
                icon={exit}
                text='Alterar Senha' />

        </nav>
    )
}
export default NavBar