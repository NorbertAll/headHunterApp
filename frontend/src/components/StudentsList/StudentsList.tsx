import { useState } from 'react';


import c from '../../utils/constants';

import Search from './Search';
import { Container, Controlls, FilterButton, List, Tab, Tabs } from './styles';



const StudentsList = () => {
  const [activeTab, setActiveTab] = useState(c.INTERVIEWS);

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
