import '../Styles/Footer.css'

function Footer() {
    return(
        <footer>
            <div className='img-footer'>
                <img src="assets/images/logo-footer.svg" alt="logo" />
            </div>
            <div className='footeerr'>
                <ul>
                    <li>Quem somos</li>
                    <li>Sobre nós</li>
                    <li>Funcionalidades</li>
                </ul>
            </div>
            <div></div>
            <div className='footeerr'>
                <ul>
                    <li>Rua Tito, 54 - Lapa, SP</li>
                    <li>Política de privacidade</li>
                    <div className='footer-verdinho' onClick={() => window.location.href = '/Financeiro.docx'}>
                        <p>Financeiro</p>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer