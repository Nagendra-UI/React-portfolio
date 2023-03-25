import { keyframes } from '@emotion/react';
import { styled } from '@mui/material';

export const TextPopUpTop = keyframes`
0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }`

export const Spincube = keyframes`
 0% {
   transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  16% {
    transform: rotateY(-90deg)
  } 
  33% {
    transform: rotateY(-90deg) rotateZ(90deg);
  }
  50% {
    transform: rotateY(-180deg) rotateZ(90deg);
  }
   66% {
    transform: rotateY(-270deg) rotateZ(90deg);
  }
  83% {
    transform: rotateY(90deg) rotateZ(90deg);
  }
`



export const Container = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  width: '100%',
  padding: '30px',
  paddingLeft: '100px',
   [theme.breakpoints.down('sm')]: {
        
        paddingLeft:'50px',
       
    }
}))

export const SubHead = styled('h1')(() => ({
  fontFamily: "'Ubuntu', sans-serif",
  color: "#8d8d8d",
  fontSize: "20px",
  marginTop: "30px",
  marginBottom: "50px",
  letterSpacing: "2px"
}))

export const TextZone = styled('div')(({ theme }) => ({
    width: '70%',
    padding:'100px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding:'50px',
    }
}));

export const AnimateText = styled('span')(() => ({
  color: '#eee',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '50px',
  lineHeight: '70px',
  display: 'inline-block',
}))

export const Text = styled("span")(() => ({
  color: '#eee',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '18px',
  lineHeight: '26px',

}))

export const Div = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    }
}))

export const Title = styled('span')(({ theme }) => ({
    color: '#eee',
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: '40px',
    lineHeight: '70px',
    display: 'inline-block',
    [theme.breakpoints.down('lg')]: {
        fontSize: '35px',
        lineHeight: '50px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '30px',
        lineHeight: '45px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '25px',
        lineHeight: '35px',
    }
}))



export const CubeSection = styled('div')(({ theme }) => ({
    width: '50%',
    cursor: 'pointer',
    padding: '100px',
    paddingTop: '20px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        paddingLeft: '25%',
        height: '50vh',
    }
}))

export const Face = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '200px',
  height: '200px',
  border: '1px solid #ccc',
  background: 'rgba(255,255,255,0.3)',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 15px 0 lightyellow',
   [theme.breakpoints.down('sm')]: {
        width: '150px',
        height: '150px',
    }
}))

export const CubeSpinner = styled('div')(() => ({
  position:'absolute',
  animation: `${Spincube}`,
  animationTimingFunction: 'easeInOut',
  animationIterationCount: 'infinite',
  animationDuration: '12s',
  transformStyle: 'preserve-3d',
  transformOrigin: '100px 100px 0',
  '&:hover': {
    // animationPlayState: 'paused'
  }
}))



export const trans = { type: 'spring', repeat: Infinity, repeatDelay: 4 }
export const circle = {
  hidden: { pathLength: 0, rotate: 0 },
  visible: () => {
    const delay = 1 + 1 * 0.5;
    return {
      pathLength: 1,
      rotate: 360,
      transition: trans
    };
  }
};

