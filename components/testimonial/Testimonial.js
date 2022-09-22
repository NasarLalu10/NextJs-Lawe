import styles from "./style.module.css"
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TestimonialSection = () => {
    return (
        <>
            <section className={styles.testiSection}>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12  text-center">

                            <h1 className="orangeText">Legal Practice Areas</h1>

                            <div>
                                <hr className={styles.sideLines} />
                                <a href="#" className={styles.iconSize + " text-decoration-none orangeText"}> <FontAwesomeIcon icon={faScaleBalanced} /></a>
                                <hr className={styles.sideLines} />
                            </div>

                            <p>Officia ad ipsum consequat quis ipsum eu fugiat voluptate.</p>

                        </div>

                    </div>

                    <div className={styles.clientContainer + " container"}>

                        <div className="row">

                            <div className="col-md-6">

                                <div className={styles.clientText}>
                                    <h3 className="orangeText">"</h3>
                                    <p className="orangeText">Do mollit esse nisi labore. Mollit non consectetur irure
                                        reprehenderit do ut Lorem sit sunt id irure quis.
                                        In cupidatat labore tempor et dolor quis mollit ex consequat. In voluptate ut aliquip
                                        sint</p>
                                </div>

                                <div className={styles.clientImages}>
                                    <div className={styles.clientImage + " d-flex align-items-center"}>
                                        <img src="https://via.placeholder.com/250" className={styles.clientMaleImage} />
                                        <div className="ms-4">
                                            <h5 className="orangeText">Jonathan Doe</h5>
                                            <p>Buisness Man</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className={styles.clientText}>
                                    <h3 className="orangeText">"</h3>
                                    <p className="orangeText">Do mollit esse nisi labore. Mollit non consectetur irure
                                        reprehenderit do ut Lorem sit sunt id irure quis.
                                        In cupidatat labore tempor et dolor quis mollit ex consequat. In voluptate ut aliquip
                                        sint</p>
                                </div>

                                <div className="clientImages ">
                                    <div className={styles.clientImage + " d-flex align-items-center"}>
                                        <img src="https://via.placeholder.com/250" className={styles.clientMaleImage} />
                                        <div className="ms-4">
                                            <h5 className="orangeText">Jonathan Doe</h5>
                                            <p>Buisness Man</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection;