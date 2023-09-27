import styles from './Loading.module.css'
import { Loading01, Loading02, Loading03 } from '../../../utils/imgs'
import { motion } from 'framer-motion'

function Loading() {
    return (
        <motion.div>
            <motion.div className={styles.loading} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                <motion.img src={Loading01} alt="Loading..."/>
                <motion.img src={Loading02} alt="Loading..." initial={{rotate: 0}} animate={{rotate: 360}} transition={{duration: 2, repeat: Infinity, ease: 'linear'}} />
                <motion.img src={Loading03} alt="Loading..."/>
            </motion.div>
        </motion.div>
    )
}

export default Loading
