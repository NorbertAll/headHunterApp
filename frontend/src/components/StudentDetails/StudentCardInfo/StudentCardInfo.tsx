import { Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { pxToRem } from '../../../utils/styles';
import { theme } from '../../../utils/theme';

import {
  StyledBoxStudentGit,
  StyledCardStudentInfo,
  StyledCardStudentAvatar,
  StyledIconStudent,
  StyledBoxStudentContactItem,
  StyledButtonAction,
} from './StudentCardInfo.styles';

export const StudentCardInfo = () => {
  return (
    <StyledCardStudentInfo>
      <StyledCardStudentAvatar
        alt="Tester Testowy"
        src="https://github.com/lukaszzadamczyk.png"
      />
      <Typography variant="h6">Tester Testowy</Typography>
      <StyledBoxStudentGit>
        <StyledIconStudent fontSize="small" />
        <Typography sx={{ fontSize: pxToRem(14) }}>testertestowy</Typography>
      </StyledBoxStudentGit>
      <Box>
        <StyledBoxStudentContactItem>
          <CallIcon sx={{ color: theme.palette.secondary.dark }} />
          +48 101010101
        </StyledBoxStudentContactItem>
        <StyledBoxStudentContactItem>
          <EmailIcon sx={{ color: theme.palette.secondary.dark }} />
          testertestowy@gmail.com
        </StyledBoxStudentContactItem>
      </Box>
      <Box>
        <Typography fontSize={pxToRem(14)} color={theme.palette.secondary.dark}>
          O mnie
        </Typography>
        <Typography fontSize={pxToRem(14)} marginBottom={pxToRem(36)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore
          soluta sed natus doloribus explicabo, dolorem necessitatibus
          asperiores porro ipsum consequuntur velit
        </Typography>
      </Box>
      <StyledButtonAction
        variant="contained"
        color="error"
        fullWidth
        size="small"
      >
        Brak zainteresowania
      </StyledButtonAction>
      <StyledButtonAction
        variant="contained"
        color="error"
        fullWidth
        size="small"
      >
        Zatrudniony
      </StyledButtonAction>
    </StyledCardStudentInfo>
  );
};
