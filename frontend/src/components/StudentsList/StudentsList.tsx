import { styled } from '@mui/material';

const Container = styled('div')(() => ({
  maxWidth: 1200,
  // height: '80vh',
  background: '#222',
  margin: '2rem auto',
  padding: '0 1.5rem',
}));

const StudentsList = () => {
  return (
    <Container>
      <div>StudentsList</div>
    </Container>
  );
};

export default StudentsList;
