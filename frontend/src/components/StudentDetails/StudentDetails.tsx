import { Grid } from '@mui/material';
import { HeaderAppBar } from '../HeaderAppBar/HeaderAppBar';
import { StudentCardInfo } from './StudentCardInfo/StudentCardInfo';

import { StyledContainerStudentDetails } from './StudentDetails.styles';

export const StudentDetails = () => {
  return (
    <>
      <HeaderAppBar />
      <StyledContainerStudentDetails>
        <Grid container>
          <Grid item xs={3}>
            <StudentCardInfo />
          </Grid>
          <Grid item xs={9}>
            sa
          </Grid>
        </Grid>
      </StyledContainerStudentDetails>
    </>
  );
};
