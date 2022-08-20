import { useState } from 'react'
import { TableCell, TableRow , styled, Avatar, IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import c from '../../utils/constants';

import Subrow from './Subrow'
import { ActionButton } from './styles';
import { IStudent } from './types';

const StyledTableRow = styled(TableRow)(() => ({
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 576px)' : {
    flexDirection: 'column',
  },
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
  },
  '& .actions-container': {
    display: 'flex',
    padding: 0, 
    '@media (max-width: 576px)' : {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  '& .buttons': {
    // padding: 0, 
    '@media (max-width: 576px)' : {
      display: 'flex',
      flexDirection: 'column',
      '& button': {
        marginBottom: '.5rem',
      }
    },
  }
}));


interface IProps {
  index: number
  tabLength: number
  // I use intterface from development test data 
  student: IStudent
  activeTab: string
  handleBookInterview: (id: string | number) => void
  handleStudentNoInterest: (id: string | number) => void
  handleStudentHired: (id: string | number) => void
}

const Row = ({ student, index, activeTab, tabLength = 0, handleBookInterview, handleStudentNoInterest, handleStudentHired }: IProps) => {
  const [ subrowOpen, setSubrowOpen ] = useState(false)
  return (
    <>
      <StyledTableRow key={student.id_student} className={index === tabLength - 1 ? 'no-border-bottom' : ''}>
        <TableCell style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
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
        </TableCell>
        <TableCell className='actions-container'>
          <TableCell className='buttons'>
            {activeTab === c.STUDENTS && <ActionButton className='m-l-sm' onClick={() => handleBookInterview(student.id_student)}>Zarezerwuj rozmowę</ActionButton>}
            {activeTab === c.INTERVIEWS && (
              <ActionButton className='m-l-sm'>
                {/* Should be link to student's CV */}
                Pokaż CV
              </ActionButton>
            )}
            {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm' onClick={() => handleStudentNoInterest(student.id_student)}>Brak zainteresowania</ActionButton>}
            {activeTab === c.INTERVIEWS && <ActionButton className='m-l-sm' onClick={() => handleStudentHired(student.id_student)}>Zatrudniony</ActionButton>}
            
          </TableCell>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setSubrowOpen(prev => !prev)}>
              {subrowOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableCell>


      </StyledTableRow>
      <Subrow subrowOpen={subrowOpen} student={student}/>
    </>
  )
}

export default Row