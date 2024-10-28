import styles from '../navBar/NavBar_aluno.module.css'
import PrimaryButton from '../Buttons2/PrimaryButton'

//Import icons from navbar
//import user from '../../../public/assets/images/user.svg'
import id from '../../assets/images/id.svg'
import book from '../../assets/images/book.svg'
import exit from '../../assets/images/exit.svg'
import logo from '../../assets/images/Group41.svg'

function NavBar_aluno() {
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
export default NavBar_aluno