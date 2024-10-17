import styles from '../Buttons/SecundaryButton.module.css'
function SecundaryButton({ text, icon }) {
    return (
        <div className={styles.btn2}>
            <p>{text}</p>
            <img src={icon} alt="" />
        </div>
    )
}
export default SecundaryButton