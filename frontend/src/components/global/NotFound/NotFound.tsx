import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  StyledBoxErrorContainer,
  StyledBoxImg,
  StyledLinkForIcon,
} from './NotFound.styles';

export const NotFound = () => {
  const navigate = useNavigate();

  const info = 'Strona, której szukasz nie istnieje.';
  const text =
    'Być może błędnie wpisałeś adres lub strona mogła zostać przeniesiona.';

  return (
    <>
      <StyledBoxErrorContainer>
        <StyledBoxImg />
        <Typography>{info.toLocaleUpperCase()}</Typography>
        <Typography marginBottom="5vh">{text.toLocaleUpperCase()}</Typography>
        <Button
          onClick={() => navigate(-1)}
          size="large"
          color="error"
          variant="contained"
        >
          Powrót
        </Button>
      </StyledBoxErrorContainer>
      <StyledLinkForIcon
        color="white"
        underline="hover"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/page-not-found"
        title="page not found icons"
      >
        Page not found icons created by Smashicons - Flaticon
      </StyledLinkForIcon>
    </>
  );
};
