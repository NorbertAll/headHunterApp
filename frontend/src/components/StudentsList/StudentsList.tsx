import { useState } from 'react';
import styled from '@emotion/styled';

import c from '../../utils/constants';

import Search from './Search';

const Container = styled.div`
  max-width: 1430px;
  background: #292A2B;
  margin: 1.625rem auto;
`

const Tabs = styled.div`
  display: flex;
  border-bottom: 2px solid #202122;
`;

const Tab = styled.div<{ activeTab: boolean }>`
  cursor: pointer;
  fontsize: 18px;
  padding: 1.375rem 2.125rem;
  border: 1px solid transparent;
  border-bottom: ${(props) =>
    props.activeTab ? '3px solid #e02735' : '3px solid transparent'};
`;

const List = styled.div`
  padding: 0 20px;
`

const Controlls = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #202122;
  padding: 20px 0;
`

const FilterButton = styled.button`
  color: #f7f7f7;
  font-size: 16px;
  background-color: #1E1E1F;
  border: none;
  padding: 6px 10px;
`

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
