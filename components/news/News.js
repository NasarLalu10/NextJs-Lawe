import styles from "./style.module.css"
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewsSection = ({NewsLinks}) => {

    return (

        <section className={styles.newsSection}>

            <div className="container">

                <div className="row">

                    <div className="col-md-12  text-center">

                        <h1 className="orangeText">Latest News</h1>

                        <div>
                            <hr className={styles.sideLines} />
                            <a href="#" className={styles.iconSize + " text-decoration-none orangeText"}> <FontAwesomeIcon icon={faScaleBalanced} /></a>
                            <hr className={styles.sideLines} />
                        </div>

                        <p>Officia ad ipsum consequat quis ipsum eu fugiat voluptate.</p>

                    </div>

                </div>

                <div class={styles.newsRow + " row mt-3"}>

                    {NewsLinks?.map((news, i) => {
                        return (

                            <div class={styles.newsCol + " col-md-4"}>

                                <img src="images/proimage.jpg" class={styles.newsImage1} />

                                <div class={styles.colContainer}>

                                    <div class={styles.newsBox}>

                                        <img src="https://via.placeholder.com/250" class={styles.newsImage} />

                                        <h4>{news.NewsName}</h4>

                                    </div>

                                    <p>{news.NewsContent}</p>

                                    <hr class={styles.orangeText} />

                                    <p>criminal laws | july 10,2021</p>

                                    <a href="#" className="orangeText text-decoration-none">
                                        <FontAwesomeIcon icon={faArrowRight} className="ms-1" />Read More...</a>


                                </div>

                            </div>

                        )
                    })}

                </div>

            </div>

        </section>
    )
}

export default NewsSection

