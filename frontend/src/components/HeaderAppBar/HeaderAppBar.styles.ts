import { AppBar, Box, styled } from '@mui/material';
import { theme } from '../../utils/theme';

import megaKurs from '../../assets/images/megaKurs.png';

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: theme.palette.primary.dark,
}));

export const StyledLogoAppBar = styled(Box)(() => ({
  width: '100px',
  height: '100px',
  backgroundImage: `url(${megaKurs})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'center',
}));
