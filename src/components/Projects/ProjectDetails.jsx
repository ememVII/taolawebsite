import { homeProject01 } from '../../utils/imgs';
import styles from './ProjectsList.module.css'
import { Link } from 'react-router-dom';

function ProjectDetails() {
    return (
        <div className='row '>
            <div className=''>
                <img src={homeProject01} alt="" />
            </div>
            
            <div>
                <h2>1- Hospitality</h2>
                <h3><Link to=''></Link></h3>
                <span></span>
            </div>
        </div>
    )
}

export default ProjectDetails
