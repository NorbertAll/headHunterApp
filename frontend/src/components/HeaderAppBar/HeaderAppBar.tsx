import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar, Box, Container } from '@mui/material';

import { HeaderMenuList } from './HeaderMenuList/HeaderMenuList';
import { StyledLogoAppBar } from './HeaderAppBar.styles';

export const HeaderAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container disableGutters>
          <Toolbar>
            <StyledLogoAppBar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <HeaderMenuList />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
