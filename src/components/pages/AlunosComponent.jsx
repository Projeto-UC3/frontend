import Style from "../Styles/AlunosCadastrados.module.css";
function AlunosComponent({nome,ra,turma}){
    return(
        <div className={Style.alunos}>
            <p>{nome}</p>
            <div className={Style.ra}>
                <p>{ra}</p>
                <p>{turma}</p>
            </div>
        </div>
    )
}
export default AlunosComponent