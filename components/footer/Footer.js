import styles from "./style.module.css"
import { faFacebook ,faTwitter ,faYoutube ,faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight,faChevronRight,faLocationDot,faPhone,faEnvelope,faClock,faScaleBalanced} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterSection = () => {

    return (
        <>

            <section className={styles.footerSection}>

                <div className="container">

                    <div className={styles.footerRow + " row"}>

                        <div className={styles.footer1 + " col-md-3"}>

                            <h1><FontAwesomeIcon icon={faScaleBalanced} className="me-3 orangeText"/>LAWE</h1>
                            <p className="orangeText">Lawyer & Attorney</p>

                            <p className="mb-5">Do mollit esse nisi labore. Mollit non consectetur irure reprehenderit do ut Lorem sit sunt id
                                irure quis. In cupidatat labore tempor et dolor quis mollit ex consequat. In voluptate ut
                                aliquip sint
                            </p>
                           
    
                            <div className="socialIiconsContainer">
                               <span className=" orangeBg p-2 rounded-2 me-1"> <FontAwesomeIcon icon={faFacebook} /> </span>
                               <span className=" orangeBg p-2 rounded-2 me-1"> <FontAwesomeIcon icon={faTwitter} />  </span>
                               <span className=" orangeBg p-2 rounded-2 me-1"> <FontAwesomeIcon icon={faYoutube} />  </span>
                               <span className=" orangeBg p-2 rounded-2 me-1"> <FontAwesomeIcon icon={faGoogle} />   </span>
                            </div>

                        </div>

                        <div className={styles.footer2 + " col-md-3"}>

                            <h3 className="orangeText">Contact Info</h3>
                            <hr className={styles.hrLine} />
                            <ul className="list-unstyled">
                                <li className={styles.contact1}><FontAwesomeIcon icon={faLocationDot} className="me-3 orangeText"/>99 St.Jombala Park pekarumbu,indonesia</li>
                                <li className={styles.contact2}><FontAwesomeIcon icon={faPhone} className="me-3 orangeText"/>(0761) 654-124345</li>
                                <li className={styles.contact3}><FontAwesomeIcon icon={faEnvelope} className="me-3 orangeText"/>hell- satolawe@lawyer.com</li>
                                <li className={styles.contact4}><FontAwesomeIcon icon={faClock} className="me-3 orangeText"/>Mon-Sat 09:00 - 17:00</li>
                            </ul>

                        </div>

                        <div className={styles.footer3 + " col-md-3"}>

                            <h3 className="orangeText">Practice Areas</h3>
                            <hr className={styles.hrLine} />
                            <p><FontAwesomeIcon icon={faArrowRight} className="me-3 orangeText"/>Single Practice</p>

                        </div>

                        <div className={styles.footer4 + " col-md-3"}>

                            <h3 className="orangeText">Usefull Links</h3>
                            <hr className={styles.hrLine} />
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon icon={faChevronRight} className="me-3 orangeText"/>About Us</li>
                                <li><FontAwesomeIcon icon={faChevronRight} className="me-3 orangeText"/>Attorneys</li>
                                <li><FontAwesomeIcon icon={faChevronRight} className="me-3 orangeText"/>Case Study</li>
                                <li><FontAwesomeIcon icon={faChevronRight} className="me-3 orangeText"/>Practice Areas</li>
                                <li><FontAwesomeIcon icon={faChevronRight} className="me-3 orangeText"/>Contact</li>
                                <li><FontAwesomeIcon icon={faChevronRight} className="me-3 orangeText"/>Faq</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default FooterSection