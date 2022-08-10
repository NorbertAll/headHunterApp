import c from '../../utils/constants';

import { Tab, Tabs } from './styles';

interface IProps {
  activeTab: string
  changeActiveTab: (tabName: string) => void
}

const TableTabs = ({ activeTab, changeActiveTab }: IProps) => {
  return (
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
  )
}

export default TableTabs