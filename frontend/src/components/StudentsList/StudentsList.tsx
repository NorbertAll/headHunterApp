import React, { useCallback, useState } from 'react';
import { Table, TableBody } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import c from '../../utils/constants';

import Search from './Search';
import Pagination from './Pagination';
import Row from './Row'
import { ContentContainer, Container, Controlls, ActionButton, ListContainer } from './styles';
import { DIRECTION } from './types';
import TableTabs from './TableTabs';

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





const StudentsList = () => {
  const [activeTab, setActiveTab] = useState(c.INTERVIEWS);
  const [students] = useState(() => testData)
  const [searchValue, setSearchValue] = useState('')
  const [entries, setEntries] = useState(10)
  const [page, setPage] = useState(1)
  const pages = students?.length ? Math.ceil(students.length / entries) : 1

  const changeActiveTab = useCallback((tabName: string) => setActiveTab(tabName), [])

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const parsedValue = parseInt(e.target.value)
    setEntries(parsedValue)
  }

  const handlePageChange = (direction: DIRECTION) => {
    if (direction === DIRECTION.inc) return setPage(prev => prev + 1)
    if (direction === DIRECTION.dec) return setPage(prev => prev - 1)
  }

  return (
      <Container>
        <ContentContainer>
          <TableTabs activeTab={activeTab} changeActiveTab={changeActiveTab} />
          <ListContainer>
            <Controlls>
              <Search searchValue={searchValue} handleSearchValueChange={handleSearchValueChange}/>
              <ActionButton color='secondary' style={{ display: 'flex', alignItems: 'center' }}>
                <FilterAltIcon sx={{ color: '#4D4D4D', fontSize: 22 }}/>
                <span>Filtrowanie</span>
              </ActionButton>
            </Controlls>
            
            <Table>
              <TableBody>
                {students?.length > 0 && students.map((item, index) => (
                  <Row key={item.id_student} student={item} index={index} tabLength={students?.length} activeTab={activeTab}/>
                ))}
              </TableBody>
            </Table>

          </ListContainer>
        </ContentContainer>
        <Pagination entries={entries} page={page} handleEntriesChange={handleEntriesChange} handlePageChange={handlePageChange} pages={pages}/>
      </Container>
  );
};

export default StudentsList;
