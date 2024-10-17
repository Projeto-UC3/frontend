import '../Styles/Header.css'

function Header() {
    return(
        <header>
            <div>
                <img src="" alt="" />
            </div>
            <nav>
                <ul>
                    <li>Quem somos</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <div className='button'>
                <div className='button-1'>Cadastre-se</div>
                <div className='button-2'>Entrar</div>
            </div>
        </header>
    )
}
export default Header