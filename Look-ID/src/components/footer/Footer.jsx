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
                    <li>Termo de uso</li>
                    <li>Manual da marca</li>
                    <li>Política de privacidade</li>
                </ul>
            </div>
            <div></div>
            <div className='footeerr'>
                <ul>
                    <li>Telefone:</li>
                    <li>(11) 2632-4489</li>
                    <li>(11) 1028-5678</li>
                    <br />
                    <li>Contato:</li>
                    <li>E-mail: brotomais@gmail.com.br</li>
                    <li>Endereço:</li>
                    <br />
                    <li>Rua Tito, 54 - Lapa, SP</li>
                    <li>Política de privacidade</li>
                </ul>
                <div className='footer-imgss'>
                    <div>
                        <img src="assets/images/face.svg" alt="" />
                        <img src="assets/images/insta.svg" alt="" />
                        <img src="assets/images/linkedin.svg" alt="" />
                    </div>
                    <div className='footer-verdinho'>
                        <p>Fale Conosco</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer