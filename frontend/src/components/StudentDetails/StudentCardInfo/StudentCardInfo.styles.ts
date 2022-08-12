import { Box, styled, Card, Avatar, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { pxToRem } from '../../../utils/styles';
import { theme } from '../../../utils/theme';

export const StyledCardStudentInfo = styled(Card)(() => ({
  padding: `${pxToRem(30)} ${pxToRem(26)} ${pxToRem(23)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: pxToRem(14),
  backgroundColor: theme.palette.primary.light,
}));

export const StyledCardStudentAvatar = styled(Avatar)(() => ({
  width: pxToRem(150),
  height: pxToRem(150),
  marginBottom: pxToRem(12),
}));

export const StyledIconStudent = styled(GitHubIcon)(() => ({
  marginRight: pxToRem(5),
}));

export const StyledBoxStudentGit = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'left',
  marginBottom: pxToRem(19),
}));

export const StyledBoxStudentContactItem = styled(Box)(() => ({
  display: 'flex',
  marginBottom: pxToRem(8),
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: pxToRem(10),
  padding: '0.25rem 0',
}));

export const StyledButtonAction = styled(Button)(() => ({
  marginBottom: pxToRem(26),
  padding: pxToRem(10),
}));
