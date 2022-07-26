import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  StyledBoxErrorContainer,
  StyledBoxImg,
  StyledLinkForIcon,
} from './ErrorPage.styles';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const info = "The page you were looking for doesn't Exist.";
  const text = 'You may have mistyped the address or the page may have moved.';

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
          Go Back
        </Button>
      </StyledBoxErrorContainer>
      <StyledLinkForIcon
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
