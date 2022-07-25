import { Box, styled } from '@mui/material';

import megaKurs from '../../assets/images/megaKurs.png';

export const StyledLogoAppBar = styled(Box)(() => ({
  width: '100px',
  height: '100px',
  backgroundColor: 'transparent',
  backgroundImage: `url(${megaKurs})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'center',
}));
