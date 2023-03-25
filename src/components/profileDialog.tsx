import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { styled, useMediaQuery } from '@mui/material';
import { Box, Modal } from '@mui/material';
import AnimatedLetters from './AnimatedLetters';
import GitHub from '../assets/github.svg';
import LinkedInSVG from '../assets/linkedIn.svg';
import { circle, Title } from './common';
import theme from '../theme';
import { Link } from 'react-router-dom';

const profile = {
  Name: "Nagendra Babu Burra", DoB: "30 / 05 / 1992", Gender: "Male", Nationality: "INDIAN", Languages: "English, Telugu and Hindi", Phone:"+91 9963026396", EMail:"nagendra.bmail@gmail.com", GitHub: "https://github.com/Nagendra-UI/", LinkedIn: "https://in.linkedin.com/in/nagendra-b-74038792"
};

export interface SimpleDialogProps {
  open: boolean;
  selectedValue?: string;
  onClose: () => void;
}

const ModelBox = styled(motion.div)(({theme}) => ({
    fontFamily: "'Ubuntu', sans-serif",
    position: 'absolute' as 'absolute',
    right: '0',  
    width: 500,
    height: 500,
    background: 'rgba(7,9,14,0.8)',
    border: '3px solid #35c071',
    borderRadius: '2%',
    padding: '40px',
    transformStyle: 'preserve-3d',
    transformOrigin: '100px 100px 0',
    boxShadow: '0 0 25px 0 lightyellow',
    [theme.breakpoints.down('md')]: {
         height: 450,
    },
    [theme.breakpoints.down('sm')]: {
      width:'90%',
        padding: '20px',
         height: 400,
         
    }
  }));
  const profileDiv = {
    color: "#35c071",
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

export default function SimpleDialog(props: SimpleDialogProps) {
     const matches = useMediaQuery(theme.breakpoints.down('sm'));

  
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  const containe = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05, delayChildren: 0.8 * i,
      },
    }),
  }

  const trans = { type: 'spring', repeat: Infinity, repeatDelay: 4 }
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
      x: 100, y: 10,
      tansition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        yoyo: Infinity,
      },
    }
  }



  const draw1 = {
    hidden: { scale: 0 },
    visible: () => {
      const delay = 1 + 1 * 0.5;
      return {
        scale: 1,
        transition: { type: 'spring' }
      };
    }
  };

  const linkImage = (img: string, imgSrc: string) => (<motion.a initial="hidden"
    animate="visible" href={imgSrc} target="_blank"><motion.img variants={circle} src={img} style={{ background: '#35c071', borderRadius: '75%' }} /></motion.a>)
  const linkText = (link: string) => (<Link to={link} target="_blank">{link}</Link>)
  
  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ background: 'rgba(0,0,0,0.7)' }}
    >
      <motion.div initial="hidden"
        animate="visible" >
        <ModelBox variants={draw1}>
          <span onClick={handleClose} style={{ color: "#35c071", fontSize:'15px', position:'absolute', right:'15px', top:'15px', cursor:'pointer' }}>X</span>
          <Title id="modal-modal-title" sx={{ color: "#35c071", }}>
            <AnimatedLetters text="Personal Information" idx={2} />
          </Title>
          <Typography id="modal-modal-description" sx={{ fontSize: '16px', mt: 2 }}>
            {Object.entries(profile).map((data, id) => (
              <motion.div variants={containe} initial="hidden" animate="visible" className="profile_class" key={id} style={profileDiv}>
               {matches ? "" : <motion.span style={{ display: "inline-block" }} variants={child} >{data[1].includes('http') ? '' : data[0]} </motion.span>} 
                {matches ? "" : <motion.span variants={child}>{data[1].includes('http') ? '' : ':'}</motion.span>}
                <motion.span variants={child} className="profile_values">{data[1].includes('http') ? '' : data[1]}</motion.span>
              </motion.div>
            ))}
            <motion.div className="profile_class networks" variants={containe} initial="hidden" animate="visible" >
              <motion.span style={{ display: "inline-block" }} variants={child} className="profile_linkedIn" >{linkImage(LinkedInSVG, profile.LinkedIn)}</motion.span>
              <motion.span style={{ display: "inline-block" }} variants={child} className="profile_git">{linkImage(GitHub, profile.GitHub)}</motion.span>
            </motion.div>
          </Typography>
        </ModelBox>
      </motion.div>

    </Modal>



  );
}


