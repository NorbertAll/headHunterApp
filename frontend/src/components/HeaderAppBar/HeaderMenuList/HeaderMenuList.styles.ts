import { Box, MenuItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../../utils/theme';

export const StyledBoxInfoContainer = styled(Box)(() => ({
  display: 'flex',
  width: '15vw',
  justifyContent: 'space-around',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const StyledBoxUserName = styled(Box)(() => ({
  marginLeft: '1rem',
  color: theme.palette.primary.contrastText,
}));

export const StyledBoxMenuIcon = styled(Box)(() => ({
  marginLeft: '1rem',
  color: theme.palette.secondary.light,
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  minWidth: '15vw',
}));

export const StyledMenuItemLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
}));
