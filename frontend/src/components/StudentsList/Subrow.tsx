import {
  Collapse, TableBody, Box, TableCell, TableRow, styled
} from '@mui/material'

import { IStudent } from './types'
// import { Link } from 'react-router-dom'

interface IProps {
  subrowOpen: boolean
  student: IStudent
}

const StyledTableRow = styled(TableRow)(() => ({
  background: '#222324',
  borderBottom: '16px solid #1E1E1F',
  '&:last-child': {
    border: 'none',
  },
  '& td': { 
    border: 'transparent',
    padding: 16,
  },
  '& .info-container': { 
    borderBottom: 'none', 
    display: 'flex', 
    padding: 0,
    // flexDirection: 'column',
    '@media (max-width: 576px)' : {
      flexDirection: 'column',
    }
  },
  '& .info': {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #292A2B',
    minHeight: 110,
  },
  '& .info:last-child': {
    borderRight: 'none'
  },
  '& .header': {
    color: '#CFCFCF',
    fontSize: 12,
    marginBottom: 'auto',
  },
  '& .grade': {
    fontSize: 15,
    color: '#F7F7F7'
  },
  '& .grading': {
    fontSize: 15,
    color: '#9E9E9E'
  }
}))

const DetailUsageRow = ({ student, subrowOpen }: IProps) => {
  return (
    <StyledTableRow>
      <TableCell style={{ padding: 0 }} colSpan={10}>
        <Collapse in={subrowOpen} timeout="auto" unmountOnExit>
          <Box>
            {/* <Table size="small" aria-label="Requirement details"> */}
              {/* <TableHead>
                <TableRow>
                  <TableCell>Process Order</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Requirement</TableCell>
                  <TableCell>Material</TableCell>
                </TableRow>
              </TableHead> */}
              <TableBody className="info-container">
                <TableCell className='info'>
                  <p className="header">Ocena przejścia kursu</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Ocena aktywności i zaangażowania na kursie</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Ocena kodu w projekcie własnym</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Ocena pracy w zespole W Scrum</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Preferowane miejsce pracy</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Docelowe miejsce gdzie chce pracować kandydat</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Oczekiwany typ kontraktu</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Oczekiwane wynagrodzenie miesięczne netto</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Zgoda na odbycie bezpłatnych praktyk/ stażu na początek</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
                <TableCell className='info'>
                  <p className="header">Komercyjne doświadczenie w programowaniu</p>
                  <p className="grading"><span className='grade'>{student.course_completion}</span>/5</p>
                </TableCell>
              </TableBody>
            {/* </Table> */}
          </Box>
        </Collapse>
      </TableCell>
    </StyledTableRow>
  )
}

export default DetailUsageRow

