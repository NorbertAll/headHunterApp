import { Grid } from '@mui/material';
import { HeaderAppBar } from '../HeaderAppBar/HeaderAppBar';
import { StudentContainerInfo } from './StudentContainerInfo/StudentContainerInfo';
import { StudentCardInfo } from './StudentCardInfo/StudentCardInfo';
import { pxToRem } from '../../utils/styles';
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
          <Grid item xs={9} borderLeft={`${pxToRem(4)} solid transparent`}>
            <StudentContainerInfo />
          </Grid>
        </Grid>
      </StyledContainerStudentDetails>
    </>
  );
};
