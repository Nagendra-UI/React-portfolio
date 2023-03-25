import React from 'react';
import { Button, styled } from '@mui/material'
import { Title, TextZone, SubHead, CubeSpinner,Face,CubeSection,Div} from '../components/common';
import react from '../assets/react.svg';
import html from '../assets/html5.svg';
import css from '../assets/css3.svg';
import js from '../assets/js.svg';
import redux from '../assets/redux.svg';
import node from '../assets/nodejs.svg';
import AnimatedLetters from '../components/AnimatedLetters';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../theme';
import { Util } from '../util/util';
import { useEffect, useState } from 'react';
import SimpleDialog from '../components/profileDialog';


const Faces: string[] = [react, html, css, js, node, redux]


const Home = () => {
    let text1 = "Javascript Developer"
      const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [keyText, setKeyText] = useState<number>(0)
    useEffect(() => {
     const timer = setInterval(() => {
        if(matches) {
             keyText===0 ? setKeyText(1) : setKeyText(0)
        }
       
        }, 3000);
        return () => {
          clearInterval(timer)  
        }
    }, [keyText])
   console.log(matches)
   
    const text2 = Util.alter(["Frontend Developer", "Javascript Developer"], keyText)
     const text = matches ? text2 : "Frontend Developer | Javascript Developer"
    return (
        <Div>
            <TextZone>
                <Title><AnimatedLetters text="Hi," idx={1} /> <AnimatedLetters text="I'm Nagendra" idx={1}></AnimatedLetters> <AnimatedLetters text="Software Developer" idx={1} />
                </Title>
                <SubHead><AnimatedLetters text={text} idx={2} /></SubHead>
                <Button sx={{textTransform: "none"}} onClick={handleClickOpen} variant="outlined" color="secondary">Contact Me!</Button>
            </TextZone>
            <CubeSection>
               <CubeSpinner className="cube">
                    {Faces.map((val, key) =>
                        (<Face key={val} className={`face-${key + 1}`}><img src={val} /></Face>)
                    )}
                </CubeSpinner>
            </CubeSection>
             <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </Div>
    )
}

export default Home
