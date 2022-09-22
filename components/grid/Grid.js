import styles from "./style.module.css"

import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GridSection = ({clientLinks}) => {

    return (

        <div className={styles.gridSection}>
            <div className="container">

                <div className="row">

                    <div className="col-md-12  text-center">

                        <h1 className="orangeText"> Legal Practice Areas</h1>

                        <div>
                            <hr className={styles.sideLines}/>
                            <a href="#" className={styles.iconSize + " text-decoration-none orangeText"}>
                            <FontAwesomeIcon icon={faScaleBalanced}/>
                            </a>
                            <hr className={styles.sideLines}/>

                        </div>

                        <p>Officia ad ipsum consequat quis ipsum eu fugiat voluptate.</p>

                    </div>

                </div>

            </div>

            <div className="container text-center">

                <div className="row">

                    {clientLinks?.map((client, i) => {
                        return (

                            <div key={i} className="col-12 col-sm-4">
                                <div className={styles.gridBox}>
                                    <div className={styles.gridContainer}>
                                        <a href="#" className={styles.gridIcon + " text-decoration-none"}>{client.clientIcon}</a>
                                        <h3>{client.clientH3}</h3>
                                        <p>{client.clientP}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

        </div>

    )
}


export default GridSection;