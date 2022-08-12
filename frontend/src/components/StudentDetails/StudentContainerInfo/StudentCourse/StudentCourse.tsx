import { Box, Card, Typography } from '@mui/material';
import { pxToRem } from '../../../../utils/styles';
import { theme } from '../../../../utils/theme';

import {
  StyledBoxCourse,
  StyledTypographyCourse,
} from './StudentCourse.styles';

export const StudentCourse = () => {
  return (
    <Card>
      <Typography
        fontSize={pxToRem(14)}
        fontWeight="bold"
        padding={pxToRem(14)}
        paddingLeft={pxToRem(26)}
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        Kursy
      </Typography>
      <StyledBoxCourse>
        <Box>
          <StyledTypographyCourse>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsa
            blanditiis eos nemo veritatis, earum nulla dolor dicta ex
            reprehenderit cupiditate nobis neque illo? Velit, non. Voluptatibus
            repellat tenetur reiciendis!
          </StyledTypographyCourse>
        </Box>
      </StyledBoxCourse>
    </Card>
  );
};
