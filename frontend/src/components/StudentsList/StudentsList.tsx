import { useState } from 'react';
import styled from '@emotion/styled';

import c from '../../utils/constants';

const Container = styled.div`
  maxWidth: 1430px;
  background: #292A2B;
  margin: 1.625rem auto;
`

const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.div<{ activeTab: boolean }>`
  cursor: pointer;
  fontsize: 18px;
  padding: 1.375rem 2.125rem;
  border: 1px solid transparent;
  border-bottom: ${(props) =>
    props.activeTab ? '3px solid #e02735' : '3px solid transparent'};
`;

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
      <div>StudentsList</div>
    </Container>
  );
};

export default StudentsList;
