import styles from "./style.module.css";

const Banner = () => {

    return (
        <>
            <section className={styles.bannersection}>

                <div className={styles.bannerContainer + " container"}>

                    <div className={styles.bannerRow + ' row'}>

                        <div className="col-md-5">

                            <p>Welcome to Lawe</p>

                            <p></p>

                            <h1 className="orangeText">Most Successful <br></br> Law Firm</h1>

                            <p> Reprehenderit sunt sint ex anim aliquip culpa deserunt occaecat.
                                Reprehenderit sunt sint ex anim aliquip culpa deserunt occaecat.
                            </p>

                            <button type="button" className="orangeBg btn rounded-0">Learn More</button>
                            <br></br>

                
                            <div class="btn-group dropstart">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropstart
                                </button>
                                <ul class="dropdown-menu">
                    
                                </ul>
                            </div>


                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Banner