import { Button, Typography } from '@mui/material';
import {
  StyledBoxUnauthorizedContainer,
  StyledUnauthorizedBoxImg,
  StyledUnauthorizedTypography,
  StyledUnauthorizedLink,
  StyledUnauthorizedLinkForIcon,
} from './Unauthorized.styles';

export const Unauthorized = () => {
  const title = 'No authorization found.';
  const info = 'This page is not publically available.';
  const text = 'To access it please login first.';

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
            Return Home
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
