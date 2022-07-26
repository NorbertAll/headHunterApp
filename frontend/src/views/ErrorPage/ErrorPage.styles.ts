import { Box, Link, styled } from '@mui/material';

import error404 from '../../assets/images/error404.png';

export const StyledBoxErrorContainer = styled(Box)(() => ({
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledBoxImg = styled(Box)(() => ({
  width: '15vw',
  height: '15vw',
  margin: '5vh 0',
  backgroundImage: `url(${error404})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
}));

export const StyledLinkForIcon = styled(Link)(() => ({
  position: 'absolute',
  top: '98%',
  left: '87%',
  fontSize: '0.4rem',
}));
