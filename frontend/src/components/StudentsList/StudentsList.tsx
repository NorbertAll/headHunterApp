import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow , styled, Avatar, } from '@mui/material'

import c from '../../utils/constants';

import Search from './Search';
import Pagination from './Pagination';
import { ContentContainer, Container, Controlls, ActionButton, ListContainer, Tab, Tabs } from './styles';

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
  display: 'flex',
  alignItems: 'center',
  '&.no-border-bottom': {
    border: 'none'
  },
  '&:last-child td, &:last-child th': {
    border: 'none',
  },
  '& td': { 
    border: 'transparent',
  },
  '& .max-width': {
    flex: 1
  },
  '& .name': {
    fontSize: 18
  },
  '& .reservation': {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '2rem',
    '& .date': {
      letterSpacing: 1.6
    },
    '& .reservation-tag': {
      fontSize: 14,
      color: '#CFCFCF'
    }
  }
}));


const StudentsList = () => {
  const [activeTab, setActiveTab] = useState(c.INTERVIEWS);
  const [students] = useState(() => testData)
  const [searchValue, setSearchValue] = useState('')

  const changeActiveTab = (tabName: string) => setActiveTab(tabName);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  
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
              <Search searchValue={searchValue} handleSearchValueChange={handleSearchValueChange}/>
              <ActionButton color='secondary'>Filtrowanie</ActionButton>
            </Controlls>
            
            <Table>
              <TableBody>
                {students?.length > 0 && students.map((item, index) => (
                  <StyledTableRow key={item.id_student} className={index === students.length - 1 ? 'no-border-bottom' : ''}>
                    {activeTab === c.INTERVIEWS && (
                      <TableCell className="reservation">
                          <span className='reservation-tag'>Rezerwacja do</span>
                          <span className='date'>30.07.2022</span>
                      </TableCell>
                    )}
                    {activeTab === c.INTERVIEWS && (
                      <Avatar />
                    )}
                    <TableCell className='max-width name'>
                    {activeTab === c.STUDENTS ? 
                    `${item.first_name} ${item.last_name[0]}.` :
                    `${item.first_name} ${item.last_name}`
                    }
                    </TableCell>
                    <TableCell>
                      {activeTab === c.STUDENTS && <ActionButton className='m-l-sm'>Zarezerwuj rozmowę</ActionButton>}
                      {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm'>Pokaż CV</ActionButton>}
                      {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm'>Brak zainteresowania</ActionButton>}
                      {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm'>Zatrudniony</ActionButton>}
                      
                    </TableCell>
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
