import Style from "../Implementar_escola/Component_escola.module.css"

function Component({img,titulo, text}){

    return(
            <div className={Style.boxblue}>
                <img src={img} alt="" />
                <h1>{titulo}</h1>
                <p className={Style.pblue}>{text}</p>
            </div>
    )
}

export default Component