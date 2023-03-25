import { motion } from 'framer-motion';
import { FC } from 'react';

interface AnimatedLettersProps {
    text: string;
    idx?: number
}

const AnimatedLetters: FC<AnimatedLettersProps> = ({ text, idx }) => {

    let letters = Array.from(text);
    // if (idx === 1) {
    //     letters = Array.from(text)
    // } else {
    //     letters = text.split(" ")
    // }

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.05, delayChildren: 0.5 * i,
            },
        }),
    }
    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            tansition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                yoyo: Infinity,
            },
        },
        hidden: {
            opacity: 0,
            x: -20, y: -20,
            tansition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                yoyo: Infinity,
            },
        }
    }

    const child1 = {

        visible: {
            opacity: 1,
            x: 0, y: 0,
            tansition: {
                type: "spring",
                damping: 12,
                stiffness: 1000,
            },
        },
        hidden: {
            opacity: 0,
            x: -10,
            y: 30,
            tansition: {
                type: "spring",
                damping: 12,
                stiffness: 1000,
            },
        }
    }

    const trans = { type: 'spring', repeat: Infinity, repeatDelay: 4 }


    return (
        <motion.div variants={container} initial="hidden" animate="visible">
            {
                letters.map((char, id) => (
                    <motion.span style={{ display: "inline-block" }} key={id} variants={idx === 1 ? child : child1} transition={idx === 2 ? trans : {}}
                    >
                        {idx === 1 ?
                            char === " " ? "\u00A0" : char
                            :
                            char === " " ? "\u00A0" : char
                        }

                    </motion.span>
                ))
            }
        </motion.div >
    )
}

export default AnimatedLetters