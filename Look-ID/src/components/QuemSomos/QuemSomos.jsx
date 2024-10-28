import missao from '/public/assets/images/missao.png'
import visao from '/public/assets/images/visao.png'
import valores from '/public/assets/images/valores.png'
// import quemSomos from "../QuemSomos/Vector.png";

import "../Styles/Header.css";
import "./quemSomos.css";


export default function QuemSomos() {
  return (
    <>
      
      <div className="quemSomosBody">
        <div className="bg">
          {/* <img src='src\components\QuemSomos\Vector.png' alt="" /> */}
        </div>

        <div className="conteudo-quem-somos">
          <h1>SEGURANÇA EM TODOS OS ANEXOS DA SUA ESCOLA</h1>

          <div className="missao-quem-somos">
            <div className='img-missao'>
            <img src={missao} alt="" />
            <h2>MISSÃO</h2>
            </div>

            <p className='text'>
              Garantir a segurança e o bem-estar dos alunos, proporcionando uma
              solução de monitoramento, que permita às escolas e famílias
              acompanhar a localização dos estudantes.
            </p>
          </div>


          <div className="visao-quem-somos">
            <div className='imgs-visao'>
            <img src={visao} alt="" />
            <h2>VISÃO</h2>
            </div>

            <p className='text'>Ser referência em tecnologia de segurança escolar, reconhecida por oferecer soluções que aprimoram a proteção e a gestão das instituições de ensino, 
            tornando-as mais seguras.</p>
          </div>

          <div className="valores-quem-somos">
            <div className='imgs-valores'>
            <img src={valores} alt="" />
            <h2>VALORES</h2>
            </div>

            <p className='text'>Segurança: Priorizar sempre a proteção e integridade 
            dos alunos com responsabilidade, assumindo o compromisso com a ética e a privacidade no uso dos dados dos usuários. </p>
          </div>



          <div className="nossa-equipe-quem-somos">
            <img src="public\assets\images\university-colleagues-posing-university.png" alt="" />

            <div className='nossa-equipe-texts'>
            <h2>NOSSA EQUIPE</h2>
            <p>Juntos, nos unimos para desenvolver soluções que atendam às necessidades específicas das escolas e das famílias. Somos movidos pelo propósito de criar um ambiente escolar mais seguro e conectado, e acreditamos que a colaboração entre tecnologia e educação é fundamental.   </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
