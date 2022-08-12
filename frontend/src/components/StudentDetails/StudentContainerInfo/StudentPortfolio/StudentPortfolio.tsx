import { Box, Card, Typography } from '@mui/material';
import { pxToRem } from '../../../../utils/styles';
import { theme } from '../../../../utils/theme';

import {
  StyledBoxPortfolio,
  StyledTypographyPorfolio,
  StyledAttachFileIcon,
  StyledLinkPortfolio,
} from './StudentPortfolio.styles';

export const StudentPortfolio = () => {
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
      <StyledBoxPortfolio>
        <Box>
          <StyledTypographyPorfolio>
            <StyledLinkPortfolio color="error" href="https://github.com/">
              <StyledAttachFileIcon fontSize="medium" />
              https://Loremipsum/dolor/sit/amet
            </StyledLinkPortfolio>
          </StyledTypographyPorfolio>
        </Box>
      </StyledBoxPortfolio>
    </Card>
  );
};
