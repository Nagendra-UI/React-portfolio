import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import myphoto from '../assets/nagendra.jpg'
import SimpleDialog from './profileDialog';
import { motion } from 'framer-motion';
import { circle } from './common';
import Tooltip from '@mui/material/Tooltip';

const customTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

// const StyledAvatar = styled(Avatar)`
//   ${({ theme }) => `
// //   cursor: pointer,
// width:'100px',
//   transition: ${theme.transitions.create(['background-color', 'transform'], {
//     duration: theme.transitions.duration.standard,
// })};
//   &:hover {
//     transform: scale(1.3);
//   }
//   `}
// `;

export const StyledAvatar = styled(motion.div)(() => ({
    // position: 'absolute',
    width: '50px',
    height: '50px',
    border: '1px solid #ccc',
    background: 'rgba(255,255,255,0.2)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 15px 0 lightyellow',
    borderRadius: '50%',
    '&:hover': {
        transform: 'scale(1.3)'
    }
}))

const draw = {
    hidden: { pathLength: 0, scale: 0 },
    visible: () => {
        const delay = 1 + 1 * 0.5;
        return {
            pathLength: 1,
            scale: 1.2,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};
;

export default function Profile() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <ThemeProvider theme={customTheme}>
            <Tooltip title="Profile Info">
                <StyledAvatar onClick={handleClickOpen} initial="hidden"
                    animate="visible" variants={circle}><motion.img
                        variants={draw}
                        custom={1} style={{ borderRadius: '50%' }} src={myphoto} alt="myProfile" width="40px" /></StyledAvatar>
            </Tooltip>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </ThemeProvider>
    );
}