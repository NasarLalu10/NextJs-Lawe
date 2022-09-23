import styles from "./style.module.css"
import { faFacebook, faTwitter, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavTopSection = () => {
    return (
        <>

            <section className={styles.NavHeadSection + " d-flex align-items-center"}>

                <div className="container">

                    <div className={styles.navRow + " row align-items-center"}>

                        <div className={styles.navCol + " col-md-4"}>
                            <p className="m-0">
                            <a href="tel:+4733378901" className="text-decoration-none orangeText">
                            <FontAwesomeIcon icon={faPhone} />+9180808080</a></p>
                        </div>

                        <div className={styles.navCol + " col-md-4"}>

                            <p className="m-0">
                            <a href="mailto:someone@example.com" className="text-decoration-none orangeText">
                            <FontAwesomeIcon icon={faEnvelope} />Send email</a></p>
                        </div>

                        <div className={styles.navCol + " " + styles.SocialIcons + " col-md-4"}>
                            <div className="socialIiconsContainer">
                                <span className={styles.innerIcons + " orangeText ms-3"}> <FontAwesomeIcon icon={faFacebook} /> </span>
                                <span className={styles.innerIcons + " orangeText ms-3"}> <FontAwesomeIcon icon={faTwitter} />  </span>
                                <span className={styles.innerIcons + " orangeText ms-3"}> <FontAwesomeIcon icon={faYoutube} />  </span>
                                <span className={styles.innerIcons + " orangeText ms-3"}> <FontAwesomeIcon icon={faGoogle} />   </span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default NavTopSection