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

  const ff = (model) => {
    const f = (model) => {
      return Object.keys(model)[0]
  }
  
  let id = f(model);
  
  let cell = f(model[id])
  
  let value = model[id][cell].value
  return value
  }
  const handleChangeModel = (model) => {
    props.rows.map(
      (row) => {
        if(row.id == Object.keys(model)[0]){
          row[Object.keys(model[Object.keys(model)[0]])[0]] = ff(model)
        } 
        return row
      }
    ); 
    console.log(props.rows); 
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