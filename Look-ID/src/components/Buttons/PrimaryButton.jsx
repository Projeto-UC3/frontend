import styles from '../Buttons/PrimaryButton.module.css'
function PrimaryButton({ icon, text }) {
    return (
        <div className={styles.btn1}>
            <img src={icon} alt="" />
            <p>{text}</p>
        </div>
    )
}
export default PrimaryButton