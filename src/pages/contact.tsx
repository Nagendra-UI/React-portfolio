import { motion } from 'framer-motion';


const Contact = () => {
    return (
        <motion.div initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <motion.div

                animate={{ y: 80 }}
                transition={{ type: 'spring', repeat: Infinity }}
            >
                khjk fkhjfk
            </motion.div>
        </motion.div>
    )
}

export default Contact
