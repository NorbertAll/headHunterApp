import { Dialog, DialogTitle } from '@mui/material';

import defaultFilter from '../defaultFilter'

interface IProps {
  dialogOpen: boolean
  handleClose: () => void
  chosenFilter: typeof defaultFilter
  handleChangeFilter: (newFilterObj: typeof defaultFilter) => void
}

const FilterDialog = ({ dialogOpen, handleClose, chosenFilter, handleChangeFilter }: IProps) => {
  console.log(chosenFilter, handleChangeFilter)
  return (
    <Dialog onClose={handleClose} open={dialogOpen}>
      <div style={{ background: '#0a0a0a' }}>
        <DialogTitle>Filtrowanie</DialogTitle>
      </div>

    </Dialog>
  );
}

export default FilterDialog