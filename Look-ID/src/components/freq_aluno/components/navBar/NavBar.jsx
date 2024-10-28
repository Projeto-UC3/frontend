import styles from '../navBar/NavBar.module.css'
import PrimaryButton from '../Buttons/PrimaryButton'

//Import icons from navbar
//import user from '../../../public/assets/images/user.svg'
import id from '../../../public/assets/images/id.svg'
import book from '../../../public/assets/images/book.svg'
import exit from '../../../public/assets/images/exit.svg'
import logo from '../../../public/assets/images/Group41.svg'

function NavBar() {
    return (
        <nav className={styles.navbar_aluno}>
            <h1>Opções</h1>
            

            <PrimaryButton
                icon={id}
                text='Presença' />
            <PrimaryButton
                icon={book}
                text='Faltas' />
            <PrimaryButton
                icon={exit}
                text='Alterar Senha' />
                <img className={styles.logo} src={logo} alt="" />

        </nav>
    )
}
export default NavBar