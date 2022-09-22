import styles from "./style.module.css"

import { faFacebook ,faTwitter ,faYoutube ,faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterSection = () => {

    return (
        <>

            <section className={styles.footerSection}>

                <div className="container">

                    <div className={styles.footerRow + " row"}>

                        <div className={styles.footer1 + " col-md-3"}>

                            <h1>LAWE</h1>
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
                            <hr className="hrLine" />
                            <ul className="list-unstyled">
                                <li className={styles.contact1}>99 St.Jombala Park pekarumbu,indonesia</li>
                                <li className={styles.contact2}>(0761) 654-124345</li>
                                <li className={styles.contact3}>hell- satolawe@lawyer.com</li>
                                <li className={styles.contact4}>Mon-Sat 09:00 - 17:00</li>
                            </ul>

                        </div>

                        <div className={styles.footer3 + " col-md-3"}>

                            <h3 className="orangeText">Practice Areas</h3>
                            <hr className="hrLine" />
                            <p>Single Practice</p>

                        </div>

                        <div className={styles.footer4 + " col-md-3"}>

                            <h3 className="orangeText">Usefull Links</h3>
                            <hr className="hrLine" />
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Attorneys</li>
                                <li>Case Study</li>
                                <li>Practice Areas</li>
                                <li>Contact</li>
                                <li>Faq</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default FooterSection