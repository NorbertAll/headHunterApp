import { Card, Typography } from '@mui/material';
import { pxToRem } from '../../../../utils/styles';
import { theme } from '../../../../utils/theme';

import {
  StyledBoxExpectations,
  StyledTypographyExpectations,
  StyledBoxContainerExpectations,
} from './StudentExpectations.styles';

export const StudentExpectations = () => {
  return (
    <Card>
      <Typography
        fontSize={pxToRem(14)}
        fontWeight="bold"
        padding={pxToRem(14)}
        paddingLeft={pxToRem(26)}
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        Oczekiwanie w stosunku do zatrudnienia
      </Typography>
      <StyledBoxExpectations>
        <StyledBoxContainerExpectations>
          <StyledTypographyExpectations>
            Preferowane miejsce pracy
          </StyledTypographyExpectations>
          <Typography fontWeight="bold" fontSize={pxToRem(12)}>
            Biuro
          </Typography>
        </StyledBoxContainerExpectations>
        <StyledBoxContainerExpectations>
          <StyledTypographyExpectations>
            Docelowa miasto gdzie chce pracować kandydat
          </StyledTypographyExpectations>
          <Typography fontWeight="bold" fontSize={pxToRem(12)}>
            Warszawa
          </Typography>
        </StyledBoxContainerExpectations>
        <StyledBoxContainerExpectations>
          <StyledTypographyExpectations>
            Oczekiwany typ kontraktu
          </StyledTypographyExpectations>
          <Typography fontWeight="bold" fontSize={pxToRem(12)}>
            Umowa o pracę
          </Typography>
        </StyledBoxContainerExpectations>
        <StyledBoxContainerExpectations>
          <StyledTypographyExpectations>
            Oczekiwane wynagrodzenie miesięczne netto
          </StyledTypographyExpectations>
          <Typography fontWeight="bold" fontSize={pxToRem(12)}>
            8000 zł
          </Typography>
        </StyledBoxContainerExpectations>
        <StyledBoxContainerExpectations>
          <StyledTypographyExpectations>
            Zgoda na odbycie prywatnych praktyk/stażu na początek
          </StyledTypographyExpectations>
          <Typography fontWeight="bold" fontSize={pxToRem(12)}>
            TAK
          </Typography>
        </StyledBoxContainerExpectations>
        <StyledBoxContainerExpectations>
          <StyledTypographyExpectations>
            Komercyjne doświadczenie w programowaniu
          </StyledTypographyExpectations>
          <Typography fontWeight="bold" fontSize={pxToRem(12)}>
            6 miesięcy
          </Typography>
        </StyledBoxContainerExpectations>
      </StyledBoxExpectations>
    </Card>
  );
};
