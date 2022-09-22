import styles from "./style.module.css"

const ConsultingSection= () =>{
    return(<>
    <section className={styles.intouchSection}>
        <div className={styles.intouchContainer + " container"}>
            <div className="row align-items-center text-center">

                <div className={styles.inCol + " col-md-6 text-start"}>

                    <h3 className="orangeText">Join our list to stay intouch</h3>
                    <p className="text-start">Officia ad ipsum consequat quis ipsum eu fugiat voluptate.</p>

                </div>

                <div className={styles.inCol + " col-md-6"}>

                    <button type="button" className="btn rounded-0 orangeBg">Free Consultant</button>

                </div>
            </div>
        </div>
    </section>
    </>)
}

export default ConsultingSection