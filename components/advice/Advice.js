import styles from "./style.module.css"
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdviceSection = () => {

    return (
        <section className={styles.adviceSection}>

            <div className="container">

                <div className="row">

                    <div className={styles.adviceCol + " col-md-12 text-center"}>

                        <h1 className="orangeText">Need an advivce from experts lawyers?<br />Get an appointment today!</h1>

                        <div>
                            <hr className={styles.sideLines}/>
                            <a href="#" className={styles.iconSize + " text-decoration-none orangeText"}> <FontAwesomeIcon icon={faScaleBalanced} /></a>
                            <hr className={styles.sideLines}/>
                        </div>

                        <div className="d-flex align-items-center text-center justify-content-center mb-4">

                            <a href="callto:+9190909090" className="text-decoration-none">
                                <i className="fa-solid fa-phone fs-3"></i>
                                Call us for a quick help!
                            </a>

                            <h3 className={"orangeText ms-5"}> (0761) 654-124345 </h3>

                        </div>


                        <p className=""><a href="tel:+4733378901" className="text-decoration-none">
                            <FontAwesomeIcon icon={faEnvelope} />
                            hellolawe@lawyer.com</a>
                        </p>

                        <p className=""><a href="mailto:someone@example.com" className="text-decoration-none">
                            <FontAwesomeIcon icon={faLocationDot} />
                            99brokyln street,melbourne</a>
                        </p>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default AdviceSection