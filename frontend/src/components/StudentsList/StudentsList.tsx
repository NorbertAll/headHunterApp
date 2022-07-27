import { useState } from 'react';
import { Table, TableBody, TableCell, TableRow , styled, } from '@mui/material'

import c from '../../utils/constants';

import Search from './Search';
import Pagination from './Pagination';
import { ContentContainer, Container, Controlls, FilterButton, ListContainer, Tab, Tabs } from './styles';

const testData = Array.from(Array(10)).map(() => ({
  id_student: Math.floor(Math.random() * 123124),
  tel: 123123123,
  first_name: 'Jan',
  last_name: 'Nowak',
  github_username: '',
  portfolios_urls: '',
  project_urls: '',
  bio: '',
  expected_type_work: '',
  target_city_work: '',
  expected_contract_type: 'b2b',
  expected_salary: 1200,
  can_takeapprenticeship: true,
  months_of_commercial_exp: 5,
  education: '',
  work_experience: '',
  courses: '',

  email:'test@gmail.com',
  course_completion: 4,
  course_engagment: 3,
  project_degree: 5,
  team_project_degree: 2,
  bonus_project_urls: '',
  status: ''
}))

const StyledTableRow = styled(TableRow)(() => ({
  borderBottom: '16px solid #1E1E1F',

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StudentsList = () => {
  const [activeTab, setActiveTab] = useState(c.INTERVIEWS);
  const [students] = useState(() => testData)

  const changeActiveTab = (tabName: string) => setActiveTab(tabName);

  return (

      <Container>
        <ContentContainer>

          <Tabs>
            <Tab
              activeTab={activeTab === c.STUDENTS}
              className="tab"
              onClick={() => changeActiveTab(c.STUDENTS)}
            >
              Dostępni kursanci
            </Tab>
            <Tab
              activeTab={activeTab === c.INTERVIEWS}
              className="tab"
              onClick={() => changeActiveTab(c.INTERVIEWS)}
            >
              Do rozmowy
            </Tab>
          </Tabs>
          <ListContainer>
            <Controlls>
              <Search />
              <FilterButton>Filtrowanie</FilterButton>
            </Controlls>
            
            <Table>
              <TableBody>
                {students?.length > 0 && students.map(item => (
                  <StyledTableRow key={item.id_student}>
                    <TableCell>{`${item.first_name} ${item.last_name[0]}.`}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>

          </ListContainer>
        </ContentContainer>
        <Pagination />
      </Container>
  );
};

export default StudentsList;
