import styles from "./style.module.css"
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AttorneySection = ({ AttorneyLinks }) => {

    return (
        <>
            <section className={styles.attorneySection}>

                <div className="container">

                    <div className="row">

                        <div className="col-md-12  text-center">

                            <h1 className="orangeText">Meet Our Attorneys</h1>

                            <div>
                                <hr className={styles.sideLines} />
                                <a href="#" className={styles.iconSize + " text-decoration-none orangeText"}> <FontAwesomeIcon icon={faScaleBalanced} /></a>
                                <hr className={styles.sideLines} />
                            </div>

                            <p className={styles.attorneyP}>Officia ad ipsum consequat quis ipsum eu fugiat voluptate.</p>

                        </div>

                    </div>



                    <div className={styles.attorneyRow + " row"}>

                        {AttorneyLinks?.map((attorney, i) => {

                            return (


                                <div className={styles.attorneyCol + " col-md-3"}>

                                    <img src="images/proimage.jpg" className={styles.attorneyImage} />

                                    <h5>{attorney.attorneyName}</h5>

                                    <p className="orangeText">{attorney.attorneyPosition}</p>

                                    <div className={styles.attorneySocials + " d-flex"}>

                                        <a className={styles.blueBg + " " + styles.iconPd + " text-decoration-none rounded-2 me-3"}>{attorney.attorneyIcons1}</a>
                                        <a className={styles.orangeBg + " "+ styles.iconPd + " text-decoration-none rounded-2 me-3"}>{attorney.attorneyIcons2}</a>
                                        <a className={styles.blueBg + " " + styles.iconPd + " text-decoration-none rounded-2 me-3"}>{attorney.attorneyIcons3}</a>

                                    </div>

                                </div>

                            );
                        })}


                    </div>

                </div>

            </section>
        </>
    )
}

export default AttorneySection