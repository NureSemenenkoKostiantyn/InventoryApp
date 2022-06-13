import * as React from 'react';
import { useRef, useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {updateProducts} from '../../requests.js'
import {getEditedCell, getField} from '../../EditingModelMethods.js'

function EditWindow(props) {


    


const setEditable = () => {
  let columns = props.columns
  columns.map(element => {
    if(element.field != 'id' ){
      element.editable = true
    }
    return element
  });
  return columns
}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChangeModel = (model) => {
    props.rows.map(
      (row) => {
        if(row.id == getField(model)){
          row[getField(model[getField(model)])] = getEditedCell(model)
        } 
        return row
      }
    ); 
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Selected Rows
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth = {'lg'} fullWidth>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit row
          </DialogContentText>
          <div style={{height:600, width: '100%'  }}>
                <DataGrid rows={props.rows} columns={setEditable()} rowsPerPageOptions={[5, 10, 20]} onEditRowsModelChange={(model) => {handleChangeModel(model)}}

                />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {updateProducts(props.rows); props.Refresh() ;handleClose()}}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {EditWindow}