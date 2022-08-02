import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import {
  StyledBoxUnauthorizedContainer,
  StyledUnauthorizedBoxImg,
  StyledUnauthorizedTypography,
  StyledUnauthorizedLinkForIcon,
} from './Unauthorized.styles';

export const Unauthorized = () => {
  const navigate = useNavigate();

  const title = 'Brak autoryzacji.';
  const info = 'Ta strona nie jest publicznie dostępna.';
  const text = 'Aby uzyskać do niej dostęp, najpierw się zaloguj.';

  return (
    <>
      <StyledBoxUnauthorizedContainer>
        <StyledUnauthorizedBoxImg />
        <StyledUnauthorizedTypography variant="h4">
          {title.toLocaleUpperCase()}
        </StyledUnauthorizedTypography>
        <Typography>{info.toLocaleUpperCase()}</Typography>
        <Typography marginBottom="5vh">{text.toLocaleUpperCase()}</Typography>
        <Button
          onClick={() => navigate(-1)}
          size="large"
          color="error"
          variant="contained"
        >
          Wróć
        </Button>
      </StyledBoxUnauthorizedContainer>
      <StyledUnauthorizedLinkForIcon
        color="white"
        underline="hover"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/admin"
        title="admin icons"
      >
        Admin icons created by srip - Flaticon
      </StyledUnauthorizedLinkForIcon>
    </>
  );
};
