import { Button } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { Input } from "../Export";
import {postProduct} from "../../requests"

const Form = (props) => {

    const GetProductName = (value) => SetProduct(value, "ProductName")
    const GetPartNumber = (value) => SetProduct(value, "PartNumber")
    const GetProductLabel = (value) => SetProduct(value, "ProductLabel")
    const GetStartingInventory = (value) => SetProduct(value, "StartingInventory")
    const GetInventoryReceived = (value) => SetProduct(value, "InventoryReceived")
    const GetInventoryShipped = (value) => SetProduct(value, "InventoryShipped")
    const GetInventoryOnHand = (value) => SetProduct(value, "InventoryOnHand")
    const GetMinimumRequired = (value) => SetProduct(value, "MinimumRequired")
    const [product, setProduct] = useState({
        ProductName: "",
        PartNumber: "", 
        ProductLabel: "", 
        StartingInventory: "", 
        InventoryReceived: "",  
        InventoryShipped: "", 
        InventoryOnHand: "", 
        MinimumRequired: ""
    })

    const SetProduct = (value, key) => {
        let temp = product;
        temp[key] = value;
        setProduct(temp)
    }

    const sendValue = async () => {
        if(validation()){
            await postProduct(product)
            props.Refresh()
            return
        }
        alert("Incorrect input")
    }

    const validation = () => {
        for (var key in product) {
            if(product[key] == ""){
                return false
            }
          }
          return true
    }

    return(
    <>
        <form onSubmit={(event) => {sendValue();event.preventDefault();}}>
        <FormControl sx={{ width: '25ch' }}>
            <Input label = "Name:" GetValue = {GetProductName} InputProps={{inputMode: 'text', pattern: '^[A-Za-zА-Яа-я0-9]{1,50}$'}}></Input>
            <Input label = "PartNumber:" GetValue = {GetPartNumber}></Input>
            <Input label = "Label:" GetValue = {GetProductLabel}></Input>
            <Input label = "Starting Inventory:" GetValue = {GetStartingInventory} inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,10}' }}> </Input>
            <Input label = "Inventory Received:" GetValue = {GetInventoryReceived} inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,10}' }}></Input>
            <Input label = "Inventory Shipped:" GetValue = {GetInventoryShipped} inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,10}' }}></Input>
            <Input label = "Inventory On Hand:" GetValue = {GetInventoryOnHand} inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,10}' }}></Input>
            <Input label = "Minimum Required:" GetValue = {GetMinimumRequired} inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,10}' }}></Input>
            <Button style={{margin: '5px'}} variant="outlined"  type = "submit">Add a row</Button>
        </FormControl>
        </form>
    </>
    )
}

export {Form}