import { motion } from 'framer-motion';
import { Container,  Title, Text, TextZone } from '../components/common';
import react from '../assets/react.svg';
import html from '../assets/html5.svg';
import css from '../assets/css3.svg';
import js from '../assets/js.svg';
import redux from '../assets/redux.svg';
import node  from '../assets/nodejs.svg' 
import AnimatedLetters from '../components/AnimatedLetters';
import PartclesBg from '../components/partcleBg';
import {styled} from '@mui/material';

const Faces: string[] = [react, html, css, js, node, redux]

const About = () => {
    return (
        <motion.div initial={{ scale: 0 }}
            animate={{ scale: '100%', transition: { duration: 0.5 } }}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
        >
           
             
                    <TextZone className="text-zone" ><Title><AnimatedLetters text="About Me" idx={2} /></Title><br /><br /><br />
                        <Text>Frontend Developer with 4+ years of professional experiences in Web development using Web Technologies. Two years of project experience in React Typescript.
                            <br /><br />Strong developing experience with HTML, CSS, JavaScript, and JQuery. Knowledgeable in web standards and responsive design.
                            <br /><br />Developed various JavaScript Client-side validation files for the Server pages. Good debugging and problem-solving skills.
                            <br /><br />Confidence to drive assignments to completion. Staying up-to-date with web development trends and technologies: This involves continuously learning new skills, tools, and techniques to stay current with the rapidly changing field of web development.
                        </Text></TextZone>

                    <PartclesBg />
         
       
        </motion.div>
    )
}

export default About
