import styles from "./Table.module.css";
import { DataGrid} from '@mui/x-data-grid';
import {Button, Box} from '@mui/material'


export let Tabel = (props) => {
    return(
        <>
            <h2 className={styles.h2} >{props.children}</h2>
            <div style={{ height: 300, width: '100%'  }}>
                <DataGrid rows={props.data.rows} columns={props.columns} checkboxSelection />
            </div>

            <Button style={{margin: '5px'}} variant="outlined" onClick={() => alert('Hello')}>Refresh a row</Button>

            <Button style={{margin: '5px'}} variant="outlined" onClick={() => alert('Hello')}>Remove a row</Button>

            <Button style={{margin: '5px'}} variant="outlined" onClick={() => alert("Byyyyy")}>Add a row</Button>
        </>

    )
}