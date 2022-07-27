import { useState } from 'react';

import c from '../../utils/constants';

import Search from './Search';
import { Container, Controlls, FilterButton, List, Tab, Tabs } from './styles';

const testData = Array.from(Array(6)).map(() => ({
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
  console.log(students)
  const changeActiveTab = (tabName: string) => setActiveTab(tabName);

  return (
    <Container>
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
      <List>
        <Controlls>
          <Search />
          <FilterButton>Filtrowanie</FilterButton>
        </Controlls>
        LISTA
      </List>
    </Container>
  );
};

export default StudentsList;
