import Style from "../Implementar_escola/Implementar_escola.module.css"
import Conversa from "../../../public/assets/images/conversa.svg"
import Component from "../Implementar_escola/Component_escola"
import aluno from "../../../public/assets/images/aluno.svg"
import defesa from "../../../public/assets/images/defesa.svg"
import sala from "../../../public/assets/images/sala.svg"

function Implementar() {

    return (
        <section className={Style.fundopai}>
            <div className={Style.orangebox}>
                <div className={Style.orangetext}>
                    <h1>Como implementamos nosso sistema na sua escola?</h1>
                    <p>Com um sistema que se loga através de Wi-fi e do nosso site, conseguimos conectar e monitorar
                        a localização do aluno e verificar sua frequência e se está nas extremidades da escola.</p>
                </div>
                <div className={Style.orangeimg}>
                    <img src={Conversa} alt="" />
                </div>
            </div>
            <div className={Style.bluepai}>
                <Component img={aluno} titulo="Como o aluno acessa ao site?" text="Conectando ao Wi-Fi e realizando o Login é possível que o aluno confirme sua presença." />
                <Component img={defesa} titulo="Como o pai acessa ao site?" text="Através do Login é possível que o pai acesse ao site e verifique o gráfico de presença do seu filho." />
            </div>
            <div className={Style.textmeio}>
                <p>Fornecemos um sistema de monitoramento útil, eficaz e seguro, que ajuda a promover a segurança do aluno, controle dos pais e diminui a evasão escolar.</p>
            </div>
            <div className={Style.imgfinal}>
                <img src={sala} alt="" />
            </div>




        </section>
    )
}

export default Implementar