
import Professor from '../../../public/assets/images/professor_servicos.png'
import Relatorio from '../../../public/assets/images/relatorio_camera.png'
import Alunos from '../../../public/assets/images/servicos_aluno.png'
import Camera from '../../../public/assets/images/servicos_camera.png'
import ImagemMonitoramento from '../../../public/assets/images/servicos_monitoramento.png'
import ImagemPresenca from '../../../public/assets/images/servicos_presenca.png'
import ImagemTranquilidade from '../../../public/assets/images/servicos_tranquilidade_pais.png'
import '../Styles/Header.css'
import Style from './Servicos.module.css'

function Servicos() {
    return (
        <>
            <section className={Style.area_imagem}>
                <img className={Style.imagemServicos} src="./assets/images/img-servicos.png" alt="Segurança que se destaca: vigilância escolar em tempo real, com clareza e precisão." />
            </section>

            <p className={Style.nossosServicos}>Nossos Serviços</p>

            <div className={Style.servicos}>

                <div className={Style.monitoramento}>
                    <img src={ImagemMonitoramento} alt="Monitoramento" />
                    <p className={Style.titulo_dos_servicos}>Monitoramento</p>
                    <p className={Style.descricao_servicos} >Os alunos são monitorados via rede, garantindo a segurança em todas as áreas do ambiente escolar.</p>
                </div>

                <div className={Style.monitoramento}>
                    <img src={ImagemPresenca} alt="Sistema de Presença" />
                    <p className={Style.titulo_dos_servicos}>Sistema de Presença</p>
                    <p className={Style.descricao_servicos}>Com o uso de seus próprios celulares, os alunos registram a presença, otimizando o tempo e facilitando a dinâmica das aulas.</p>
                </div>

                <div className={Style.monitoramento}>
                    <img src={ImagemTranquilidade} alt="Tranquilidade aos Pais" />
                    <p className={Style.titulo_dos_servicos}>Tranquilidade aos Pais</p>
                    <p className={Style.descricao_servicos}>Acompanhamento em tempo real da localização dos filhos diretamente pelo site, com informações na palma da mão.</p>
                </div>

            </div>

            <hr />

            <p className={Style.titulo_seguranca_aluno}>Segurança do Aluno</p>

            <section className={Style.seguranca_alun}>
                <img className={Style.alunos} src={Alunos} alt="Alunos estudando" />

                <div className={Style.topicos_seguranca}>

                    <div className={Style.conjunto_topicos}>
                        <img src={Camera} alt="Camera" />
                        <p className={Style.topico}>Monitoramento contínuo dentro e em torno da escola.</p>
                    </div>

                    <div className={Style.conjunto_topicos}>
                        <img src={Relatorio} alt="Camera" />
                        <p className={Style.topico}>Relatórios em tempo real sobre a localização dos alunos.</p>
                    </div>

                    <div className={Style.conjunto_topicos}>
                        <img src={Professor} alt="Camera" />
                        <p className={Style.topico}>Alertas automáticos para pais e professores.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Servicos