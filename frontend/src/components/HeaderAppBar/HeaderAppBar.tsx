import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

import { HeaderMenuList } from './HeaderMenuList/HeaderMenuList';
import { StyledAppBar, StyledLogoAppBar } from './HeaderAppBar.styles';

export const HeaderAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Container disableGutters>
          <Toolbar>
            <StyledLogoAppBar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <HeaderMenuList />
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};
