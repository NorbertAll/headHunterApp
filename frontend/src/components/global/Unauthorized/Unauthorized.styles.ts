import { Box, Link, styled, Typography } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';
import { theme } from '../../../utils/theme';

import error404 from '../../../assets/images/unauthorizedPerson.png';

export const StyledBoxUnauthorizedContainer = styled(Box)(() => ({
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledUnauthorizedBoxImg = styled(Box)(() => ({
  width: '15vw',
  height: '15vw',
  margin: '5vh 0',
  backgroundImage: `url(${error404})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
}));

export const StyledUnauthorizedTypography = styled(Typography)(() => ({
  marginBottom: '1rem',
  color: theme.palette.error.dark,
}));

export const StyledUnauthorizedLink = styled(LinkRouter)(() => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.error.main,
  textDecoration: 'none',
}));

export const StyledUnauthorizedLinkForIcon = styled(Link)(() => ({
  position: 'absolute',
  top: '98%',
  left: '87%',
  fontSize: '0.4rem',
}));
