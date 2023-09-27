import styles from './Clients.module.css';
import {clientLogo} from "../../utils/clients";

function Clients() {
    
    const altLogo = ['sheraton', 'abdelraouf', 'bricks4kidz', 'crcica', 'marriott', 'polyserve']
    
    return (
        <>
            <section id={styles.clients}>
                <div className="container-fluid">
                    <div className={`${styles["Main_Title"]}`}>
                        <h1></h1>
                    </div>
                    <div className="row align-items-center justify-content-center mt-4">
                        {clientLogo.map((logo, i) => 
                                <div className="col-lg-3 col-md-4 col-6" key={i}>
                                    <div className="img py-2 d-flex justify-content-center align-items-center">
                                        <img src={logo} alt={altLogo[i]} className='img-fluid'/>
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients
