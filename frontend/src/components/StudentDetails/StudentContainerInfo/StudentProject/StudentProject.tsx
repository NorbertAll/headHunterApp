import { Box, Card, Typography } from '@mui/material';
import { pxToRem } from '../../../../utils/styles';
import { theme } from '../../../../utils/theme';

import {
  StyledBoxProject,
  StyledTypographyProject,
  StyledAttachFileIcon,
  StyledLinkProject,
} from './StudentProject.styles';

export const StudentProject = () => {
  return (
    <Card>
      <Typography
        fontSize={pxToRem(14)}
        fontWeight="bold"
        padding={pxToRem(14)}
        paddingLeft={pxToRem(26)}
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        Porfolio
      </Typography>
      <StyledBoxProject>
        <Box>
          <StyledTypographyProject>
            <StyledLinkProject color="error" href="https://github.com/">
              <StyledAttachFileIcon fontSize="medium" />
              https://Loremipsum/dolor/sit/amet
            </StyledLinkProject>
          </StyledTypographyProject>
        </Box>
      </StyledBoxProject>
    </Card>
  );
};
