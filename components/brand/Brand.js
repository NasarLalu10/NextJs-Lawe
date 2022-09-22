import styles from "./style.module.css"

const BrandSection = ({BrandLinks}) => {

    return (
        <>
            <section className={styles.brandSection}>

                <div className={styles.brandContainer + " container"}>

                    <div className={styles.brandRow + " row align-items-center"}>

                        {BrandLinks?.map((Brand,i)=>{
                            return(

                        <div className={styles.brandCol + " col-md-3 align-items-center px-3"}>

                            <a href="#" className={styles.BrandIcon + " me-4"}>{Brand.BrandIcon}</a>
                            <h3>{Brand.BrandText}</h3>

                        </div>
                            );
                        })}

                    </div>

                </div>
            </section>
        </>
    )
}
export default BrandSection