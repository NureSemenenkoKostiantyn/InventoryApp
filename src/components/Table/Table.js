import styles from "./Table.module.css";
import { DataGrid} from '@mui/x-data-grid';
import {Button} from '@mui/material';
import {EditWindow} from "../Export";
import { removeProducts, receiveProducts, shipProducts } from "../../requests";
import { useState } from "react";
import { Form } from "../Export";
import { getField, getEditedCell } from "../../EditingModelMethods";


export let Table = (props) => {
    
    const [SelectedRows, SetSelectedRows] = useState([]);
    const [ShippedProducts, SetShippedProducts] = useState([])

    const handleChangeModel = (model) => {
        
        let id = getField(model);
        let number = getEditedCell(model)
        if(number == undefined){return}
        let i = 0
        ShippedProducts.forEach(product => {
            
            if(id == product.id){
                let temp = ShippedProducts
                temp[i] = {id: id, number: number}
                SetShippedProducts(temp)
                return
            }
            i += 1

        });
        let temp = ShippedProducts
        temp.push({id: id, number: number})
        SetShippedProducts(temp)
        
    } 

    return(
        <>
            
            <h2 className={styles.h2} >{props.children}</h2>
            <div style={{height:600, width: '100%'  }}>
                <DataGrid rows={props.data.rows} columns={props.columns} checkboxSelection rowsPerPageOptions={[5, 10, 20]} onEditRowsModelChange={(model) => {handleChangeModel(model)}}
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
                <EditWindow rows = {SelectedRows} columns = {props.columns} Refresh = {props.Refresh} ></EditWindow>
                <Button style={{margin: '5px'}} variant="outlined" onClick={() => {removeProducts(SelectedRows.map((obj) => obj.id));props.Refresh()}}>Remove a row</Button>
                <Button style={{margin: '5px'}} variant="outlined" onClick={async () => {await receiveProducts(ShippedProducts); ;props.Refresh();SetShippedProducts([])}}>Receive</Button>
                <Button style={{margin: '5px'}} variant="outlined" onClick={async () => {await shipProducts(ShippedProducts) ;props.Refresh();SetShippedProducts([])}}>Ship</Button>
            </div>
            <Form Refresh = {props.Refresh}></Form>
                

            
            
            
            
        </>

    )
}

