import Hedprops from '../header/Hedprops';
import '../Styles/Header.css';

function Corpo() {
    return (
        <>
            <main className='parte-home'>
                <div className='classe1'>
                    <div className='classe-numero1'>
                        <h2>SEGURANÇA EM TODOS OS ESPAÇOS DA SUA ESCOLA</h2>
                    </div>
                    <div className=''>
                        <img src="assets/images/alunos-img.svg" alt="foto de alunos" />
                    </div>
                </div>
                <div className='classe1'>

                    <div className='classe02'>
                        <img src="assets/images/imagens-alunos.svg" alt="foto de alunos" />
                    </div>
                    <div className='paragrafo-img'>
                        <h1>O QUE FAZEMOS?</h1>
                        <p>Em uma escola onde a segurança dos alunos é sempre uma prioridade, o Look_ID oferece uma solução ao seu alcance. Com nossa plataforma inovadora, você acompanha a segurança em tempo real com apenas um clique!</p>
                    </div>
                </div>
                <div className='titulo-hompage'>
                    <h1>POR QUE NOS ESCOLHER?</h1>
                </div>
                <div className='parte-cads'>

                    <Hedprops image='assets/images/escudo.svg' titulo='SEGURANÇA AVANÇADA' text='Com o Nexus, a segurança dos alunos é monitorada em tempo real, garantindo proteção constante e resposta rápida a qualquer situação.' />


                    <Hedprops image='assets/images/protecao.svg' titulo='TECNOLOGIA DE PONTA' text='Nossa plataforma inovadora oferece recursos avançados para acompanhamento do progresso e bem-estar dos alunos, facilitando a gestão escolar e a comunicação.' />


                    <Hedprops image='assets/images/segu.svg' titulo='AMBIENTE EDUCACIONAL SEGURO' text='Com um foco firme na proteção e no cuidado, proporcionamos um ambiente seguro e confiável para que os alunos possam se concentrar no aprendizado e no crescimento pessoal.' />

                </div>

                <div className='classe1'>

                    <div className=''>
                        <img src="assets/images/alunasrindo.svg" alt="foto de alunos" />
                    </div>
                    <div className='classe-numero4'>
                        <h1>COMO IMPLEMENTAMOS NOSSO SISTEMA NA SUA ESCOLA?</h1>
                        <p>Em uma escola onde a segurança dos alunos é sempre uma prioridade, o Look-ID oferece uma solução ao seu alcance. Com nossa plataforma inovadora, você acompanha a segurança em tempo real com apenas um clique!</p>
                    </div>
                </div>
                <div className='classe1'>
                    <div className='paragrafo-img'>
                        <h1>POR QUE TER ESSA FUNÇÃO NA SUA ESCOLA?</h1>
                        <p>Garante segurança constante, oferecendo resposta rápida a situações emergenciais. Além de proporcionar tranquilidade para pais e educadores e otimizar a gestão escolar, facilitando o acompanhamento dos alunos.</p>
                    </div>
                    <div className='classe02'>
                        <img src="assets/images/prof-aula.svg" alt="foto de alunos" />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Corpo