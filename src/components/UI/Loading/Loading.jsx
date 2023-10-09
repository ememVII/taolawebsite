import styles from './Loading.module.css'
import {LoadingCover, LoadingCoverMobile } from '../../../utils/imgs'
import { motion } from 'framer-motion'

function Loading() {
    return (
        <motion.div>
            <motion.div className={styles.loading} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                <img src={LoadingCover} alt="loading" />
                <img src={LoadingCoverMobile} alt="loading" />
            </motion.div>
        </motion.div>
    )
}

export default Loading
