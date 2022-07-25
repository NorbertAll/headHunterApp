import { Box, MenuItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledBoxInfoContainer = styled(Box)(() => ({
  display: 'flex',
  width: '15vw',
  justifyContent: 'space-around',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const StyledBoxUserName = styled(Box)(() => ({
  marginLeft: '1rem',
}));

export const StyledBoxMenuIcon = styled(Box)(() => ({
  marginLeft: '1rem',
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  minWidth: '15vw',
  color: '#fff',
}));

export const StyledMenuItemLink = styled(Link)(() => ({
  textDecoration: 'none',
}));
