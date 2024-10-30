import Styles from './Login.Module.css'

function Login() {
    return (
        <section className={Styles.conteudo_login}>
            <div className={Styles.fundo_login}>
                <div className={Styles.icone}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="86" viewBox="0 0 107 86" fill="none">
                        <path d="M37.45 42.9937C43.1256 42.9937 48.5688 40.7289 52.5821 36.6974C56.5954 32.666 58.85 27.1982 58.85 21.4969C58.85 15.7955 56.5954 10.3277 52.5821 6.29628C48.5688 2.26484 43.1256 0 37.45 0C31.7744 0 26.3312 2.26484 22.3179 6.29628C18.3046 10.3277 16.05 15.7955 16.05 21.4969C16.05 27.1982 18.3046 32.666 22.3179 36.6974C26.3312 40.7289 31.7744 42.9937 37.45 42.9937ZM29.8095 51.055C13.3416 51.055 0 64.457 0 80.9995C0 83.7537 2.22359 85.9874 4.96547 85.9874H69.9345C70.2355 85.9874 70.5197 85.9538 70.8206 85.9034C58.0642 76.6497 54.1353 62.2233 53.5836 52.281C50.8919 51.4749 48.0497 51.055 45.1072 51.055H29.8262H29.8095ZM81.437 37.905L61.3745 45.9663C59.8531 46.5877 58.85 48.0656 58.85 49.7115C58.85 60.3423 63.1802 78.0604 81.3869 85.6851C82.3733 86.105 83.4934 86.105 84.4798 85.6851C102.67 78.0604 107 60.3423 107 49.7115C107 48.0656 105.997 46.5877 104.475 45.9663L84.413 37.905C83.46 37.5187 82.39 37.5187 81.437 37.905ZM98.8747 52.3986C98.2227 60.9133 94.3272 71.9977 82.925 77.5398V45.9999L98.8747 52.3986Z" fill="#003366" />
                    </svg>
                    <h1>Entrar</h1>
                </div>

                <div className={Styles.Input_login}>
                    <h1>E-mail*</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="74" viewBox="0 0 600 74" fill="none">
                        <path d="M2 37C2 17.67 17.67 2 37 2H563C582.33 2 598 17.67 598 37C598 56.33 582.33 72 563 72H37C17.67 72 2 56.33 2 37Z" fill="#FEFFEA" stroke="#F19953" stroke-width="4" />
                    </svg>
                    <br />
                    <br />
                    <h1>Senha*</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="74" viewBox="0 0 600 74" fill="none">
                        <path d="M2 37C2 17.67 17.67 2 37 2H563C582.33 2 598 17.67 598 37C598 56.33 582.33 72 563 72H37C17.67 72 2 56.33 2 37Z" fill="#FEFFEA" stroke="#F19953" stroke-width="4" />
                    </svg>

                    <div className={Styles.Lembrar}>
                        <div className={Styles.box}></div>
                        <h1>Lembrar-me</h1>
                    </div>
                </div>

                <div className={Styles.botao_login}>
                    <button className={Styles.buttonnn}>Entrar</button>
                </div>
            </div>
        </section>
    )
}

export default Login