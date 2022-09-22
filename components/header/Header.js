import styles from "./style.module.css"
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ toplinks }) => {

    return (

        <>

            <nav className={styles.navHeight + " navbar navbar-expand-lg text-center bg-light "}>

                <div className="container">

                    <a href="#" className="text-center text-decoration-none navbar-brand">

                        <FontAwesomeIcon icon={faScaleBalanced} />Navbar</a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    
                        <span class="navbar-toggler-icon"></span>
                  
                        </button>
                

                    <div className="navbar-collapse collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">

                                <a className="nav-link active" aria-current="page" href="#">Home</a>

                            </li>


                            {toplinks?.map((link, i) => {


                                return (

                                    <li key={i} className="nav-item">

                                        <a className="nav-link" href={link.linkName + ""}>{link.name}</a>

                                    </li>
                                );

                            })}


                        </ul>

                    </div>

                </div>

            </nav>

        </>

    )
}

export default Header