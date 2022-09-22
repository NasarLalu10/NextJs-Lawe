import styles from "./style.module.css"

const PromiseSection = () => {
  return (
    <>
      <section className={styles.promSection}>

        <div className={styles.promContainer + " container bg-secondary"}>

          <div className={styles.promRow + " row align-items-center"}>

            <div className={styles.promCol + " col-md-8 ps-2"}>

              <h3 className="orangeText">The Attorneys You Want On Your Side</h3>

              <p className="m-0">Officia ad ipsum consequat quis ipsum eu fugiat voluptate.
              </p>

            </div>

            <div className={styles.promCol + " col-md-4"}>

              <button type="button" className=" btn rounded-0 orangeBg">Free Consultant</button>

            </div>

          </div>

        </div>

      </section>
      <div className={styles.pdng + " container"}>
        <div className={styles.promRow2 + " row"}>
          <div className="col-md-4 offset-md-2">

            <img src="/images/proimage.jpg" className={styles.promiseImage}></img>

          </div>

          <div className="col-md-6">
            <h1 className={styles.promH1}>Our Promise?</h1>

            <p className={styles.Txtmb + " orangeText"}>Officia ad ipsum consequat quis ipsum eu fugiat voluptate.</p>            <p>
              Do mollit esse nisi labore. Mollit non consectetur irure
              reprehenderit do ut Lorem sit sunt id irure quis. In cupidatat
              labore tempor et dolor quis mollit ex consequat. In voluptate ut
              aliquip sint tempor cillum eiusmod excepteur elit enim amet
              incididunt ullamco.
            </p>

            <p>
              Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt
              enim deserunt in ad et.
            </p>

            <p className={styles.Txtmt + " orangeText"}>
              Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt
              enim deserunt in ad et.
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default PromiseSection
