import { Button, Typography } from '@mui/material';
import {
  StyledBoxUnauthorizedContainer,
  StyledUnauthorizedBoxImg,
  StyledUnauthorizedTypography,
  StyledUnauthorizedLink,
  StyledUnauthorizedLinkForIcon,
} from './Unauthorized.styles';

export const Unauthorized = () => {
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
        <StyledUnauthorizedLink to="/login">
          <Button size="large" color="error" variant="contained">
            Strona logowania
          </Button>
        </StyledUnauthorizedLink>
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
