import { TableCell, TableRow , styled, Avatar, } from '@mui/material'

import c from '../../utils/constants';

import { ActionButton } from './styles';
import { IStudent } from './types';

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


interface IProps {
  index: number
  tabLength: number
  // I use intterface from development test data 
  student: IStudent
  activeTab: string
}

const Row = ({ student, index, activeTab, tabLength }: IProps) => {
  console.log('rend')
  return (
    <StyledTableRow key={student.id_student} className={index === tabLength - 1 ? 'no-border-bottom' : ''}>
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
      `${student.first_name} ${student.last_name[0]}.` :
      `${student.first_name} ${student.last_name}`
      }
      </TableCell>
      <TableCell>
        {activeTab === c.STUDENTS && <ActionButton className='m-l-sm'>Zarezerwuj rozmowę</ActionButton>}
        {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm'>Pokaż CV</ActionButton>}
        {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm'>Brak zainteresowania</ActionButton>}
        {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm'>Zatrudniony</ActionButton>}
        
      </TableCell>
    </StyledTableRow>
  )
}

export default Row