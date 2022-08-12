import { Card, Rating, Typography } from '@mui/material';
import { pxToRem } from '../../../../utils/styles';
import { theme } from '../../../../utils/theme';

import {
  StyledBoxRaiting,
  StyledTypographyRaiting,
  StyledBoxContainerRaiting,
} from './StudentRating.styles';

export const StudentRating = () => {
  return (
    <Card>
      <Typography
        fontSize={pxToRem(14)}
        fontWeight="bold"
        padding={pxToRem(14)}
        paddingLeft={pxToRem(26)}
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        Oceny
      </Typography>
      <StyledBoxRaiting>
        <StyledBoxContainerRaiting>
          <StyledTypographyRaiting>
            Ocena przejscia kursu
          </StyledTypographyRaiting>
          <Rating
            name="read-only"
            size="medium"
            value={3.35}
            precision={0.1}
            readOnly
            sx={{ color: theme.palette.error.main }}
          />
        </StyledBoxContainerRaiting>
        <StyledBoxContainerRaiting>
          <StyledTypographyRaiting>
            Ocena aktywności i zaangazowania na kursie
          </StyledTypographyRaiting>
          <Rating
            name="read-only"
            size="medium"
            value={4.25}
            precision={0.1}
            readOnly
            sx={{ color: theme.palette.error.main }}
          />
        </StyledBoxContainerRaiting>
        <StyledBoxContainerRaiting>
          <StyledTypographyRaiting>
            Ocena kodu w projekcie własnym
          </StyledTypographyRaiting>
          <Rating
            name="read-only"
            size="medium"
            value={5.0}
            precision={0.1}
            readOnly
            sx={{ color: theme.palette.error.main }}
          />
        </StyledBoxContainerRaiting>
        <StyledBoxContainerRaiting>
          <StyledTypographyRaiting>
            Ocena pracy w zesole Scrum
          </StyledTypographyRaiting>
          <Rating
            name="read-only"
            size="medium"
            value={3.78}
            precision={0.1}
            readOnly
            sx={{ color: theme.palette.error.main }}
          />
        </StyledBoxContainerRaiting>
      </StyledBoxRaiting>
    </Card>
  );
};
