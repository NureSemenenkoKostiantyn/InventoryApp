import styles from "./Table.module.css";
import { DataGrid} from '@mui/x-data-grid';
import {Button, TextField} from '@mui/material';
import {EditWindow} from "../Export";
import { removeProducts } from "../../requests";
import { useState } from "react";
import { Form } from "../Export";


export let Table = (props) => {
    
    const [SelectedRows, SetSelectedRows] = useState([]);

    return(
        <>
            
            <h2 className={styles.h2} >{props.children}</h2>
            <div style={{height:600, width: '100%'  }}>
                <DataGrid rows={props.data.rows} columns={props.columns} checkboxSelection rowsPerPageOptions={[5, 10, 20]}
                    onSelectionModelChange={(ids) => {
                        const selectedIDs = new Set(ids);
                        const selectedRowData = props.data.rows.filter((row) =>
                            selectedIDs.has(row.id)
                        )
                        SetSelectedRows(selectedRowData);
                      }}
                />
            </div>
            <div>
                <EditWindow rows = {SelectedRows} columns = {props.columns} Refresh = {props.Refresh}></EditWindow>
                <Button style={{margin: '5px'}} variant="outlined" onClick={() => {removeProducts(SelectedRows.map((obj) => obj.id));props.Refresh()}}>Remove a row</Button>
                <Button style={{margin: '5px'}} variant="outlined" onClick={() => {props.Refresh()}}>Ship</Button>
            </div>
            <Form Refresh = {props.Refresh}></Form>
                

            
            
            
            
        </>

    )
}

