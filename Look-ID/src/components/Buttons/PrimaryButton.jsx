import styles from '../Buttons/PrimaryButton.module.css'
function PrimaryButton({ icon, text }) {
    return (
        <div className={styles.btn1}>
            <img className={styles.icons} src={icon} alt="" />
            <p className={styles.text}>{text}</p>
        </div>
    )
}
export default PrimaryButton