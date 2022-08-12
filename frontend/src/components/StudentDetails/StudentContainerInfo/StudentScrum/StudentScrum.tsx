import { Box, Card, Typography } from '@mui/material';
import { pxToRem } from '../../../../utils/styles';
import { theme } from '../../../../utils/theme';

import {
  StyledBoxScrum,
  StyledTypographyScrum,
  StyledAttachFileIcon,
  StyledLinkScrum,
} from './StudentScrum.styles';

export const StudentScrum = () => {
  return (
    <Card>
      <Typography
        fontSize={pxToRem(14)}
        fontWeight="bold"
        padding={pxToRem(14)}
        paddingLeft={pxToRem(26)}
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        Projekt w zespole Scrumowym
      </Typography>
      <StyledBoxScrum>
        <Box>
          <StyledTypographyScrum>
            <StyledLinkScrum color="error" href="https://github.com/">
              <StyledAttachFileIcon fontSize="medium" />
              https://github.com/tester/MegaKursTest/commits?author=tester
            </StyledLinkScrum>
          </StyledTypographyScrum>
        </Box>
      </StyledBoxScrum>
    </Card>
  );
};
