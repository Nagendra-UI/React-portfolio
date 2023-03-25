import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import AnimatedLetters from '../components/AnimatedLetters';
import {  Container, Title, } from '../components/common';
import react from '../assets/react.svg';
import html from '../assets/html5.svg';
import css from '../assets/css3.svg';
import js from '../assets/js.svg';
import redux from '../assets/redux.svg';
import node from '../assets/nodejs.svg';
import mui from '../assets/mui.svg';
import ts from '../assets/ts.svg';
import mongo from '../assets/mongo.svg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


interface mySkillsTypes {
    skill: string,
    src: string
}

const mySkills: mySkillsTypes[] = [
    { skill: "Javascript", src: js },
    { skill: "Typescript", src: ts },
    { skill: "HTML", src: html },
    { skill: "CSS", src: css },
    { skill: "Material UI", src: mui },  
    { skill: "React", src: react },
    { skill: "Node", src: node },
    { skill: "MongoDB", src: mongo },
    { skill: "Redux", src: redux },
]

const Skills = () => {
    return (
        <motion.div initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
        <Container>
               
                    <Title><AnimatedLetters text="Technical Skills" idx={2} /></Title>
              </Container> <Container>      
                    <Grid container >
                        {mySkills.map((val, id) => (
                            <Grid item xs={12} sm={6} md={4} xl={3} p={3} key={id}>
                                <ImageList >   
                                    <ImageListItem key={id}>
                                        <img
                                        src={`${val.src}`}
                                        srcSet={`${val.src}`}
                                        alt={val.skill}
                                        loading="lazy"
                                        />
                                        <Title>
                                        <ImageListItemBar
                                        title={val.skill}
                                        sx={{ textAlign:'center' }}
                                        />
                                        </Title>
                                    </ImageListItem>
                                </ImageList>
                            </Grid>
                        ))}
                    </Grid>

             
</Container>
      
        </motion.div>
    )
}

export default Skills
