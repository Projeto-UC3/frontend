import { Link } from 'react-router-dom'
import '../Styles/Header.css'
function Header() {
    return (
        <>
            <header>
                <div className='logo'>
                    <Link to='/'><img src="assets/images/logo-look.svg" alt="" /></Link>
                </div>
                <nav>
                    <ul className='link-nav'>
                        <li><Link to='/'>Quem somos</Link></li>
                        <li><Link to='Servicos'>Serviços</Link></li>
                        <li><Link to='/'>Contato</Link></li>
                    </ul>
                </nav>
                <div className='button'>
                    <div className='button-1'>Cadastre-se</div>
                    <div className='button-2'>Entrar</div>
                </div>
            </header>
            
        </>
    )
}
export default Header