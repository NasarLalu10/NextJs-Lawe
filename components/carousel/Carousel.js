import styles from "./style.module.css"

const Carouselsection = ({carouselItems}) => {
    return (
        <>
            <div className={styles.carouselSection + ""}>

                <div className={styles.carouselContainer + " container"}>

                    <div className={styles.carouselRow +" row"}>

                        {carouselItems?.map((items, i) => {
                            return (
                                <div key={i} className={styles.carouselCol + " col-md-3 d-flex align-items-center"}>
                                   
                                        <div className={styles.carouselIcon}>

                                            <p>{items.iconLink}</p>         
                                           
                                        </div>

                                        <div className={styles.carouselText}>

                                            <h1>{items.CarouselNum}</h1>
                                            <p>{items.CarouselContent}</p>

                                        </div>


                                </div>
                            );
                            })}

                    </div>

                </div>

            </div>
        </>
    )
}

export default Carouselsection