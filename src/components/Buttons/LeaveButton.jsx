import LeaveIcon from '../../../public/assets/images/leave-icon.svg'
import Style from './LeaveButton.module.css'
function LeaveButton(){
    return(
        <div className={Style.sair}>
            <p>Sair</p>
            <img src={LeaveIcon} alt="" />
        </div>
    )
}
export default LeaveButton