import { Box, Link, styled, Typography } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { theme } from '../../../../utils/theme';
import { pxToRem } from '../../../../utils/styles';

export const StyledBoxScrum = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: pxToRem(26),
  paddingRight: pxToRem(26),
  margin: `${pxToRem(15)} ${pxToRem(0)}`,
  backgroundColor: theme.palette.primary.dark,
}));

export const StyledTypographyScrum = styled(Typography)(() => ({
  fontSize: pxToRem(13),
  color: theme.palette.info.main,
}));

export const StyledAttachFileIcon = styled(AttachFileIcon)(() => ({
  paddingRight: pxToRem(5),
  color: theme.palette.info.main,
}));

export const StyledLinkScrum = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.info.main,
  textDecoration: 'none',
}));
