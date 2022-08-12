import { Box, styled, Typography } from '@mui/material';
import { theme } from '../../../../utils/theme';
import { pxToRem } from '../../../../utils/styles';

export const StyledBoxRaiting = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingLeft: pxToRem(26),
  paddingRight: pxToRem(194.5),
  margin: `${pxToRem(10)} ${pxToRem(0)}`,
  backgroundColor: theme.palette.primary.dark,
}));

export const StyledTypographyRaiting = styled(Typography)(() => ({
  paddingBottom: pxToRem(24),
  fontSize: pxToRem(10),
  color: theme.palette.secondary.light,
}));

export const StyledBoxContainerRaiting = styled(Typography)(() => ({
  paddingRight: pxToRem(30),
}));
