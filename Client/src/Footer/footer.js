import styles from './footer.module.css'
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img src='/img/Orange.png'></img>
                <div>
                    <box-icon name='facebook-circle' type='logo' ></box-icon>
                    <box-icon name='instagram' type='logo' ></box-icon>
                    <box-icon name='pinterest' type='logo' ></box-icon>
                </div>
                <Link to="/credits">Credits</Link>
            </div>
        </>
    )
}