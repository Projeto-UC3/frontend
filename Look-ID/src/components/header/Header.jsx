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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='Somos'>Quem somos</Link></li>
                        <li><Link to='Servicos'>Serviços</Link></li>
                        <li><Link to='beneficios'>Benefícios</Link></li>
                        <li><Link to='implementar'>Como Funciona</Link></li>
                    </ul>
                </nav>
                <div className='button'>
                    <Link to='entrar'>
                        <div className='button-2'>Entrar</div>
                    </Link>
                </div>
            </header>
            
        </>
    )
}
export default Header