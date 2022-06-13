import { TextField, Button } from "@mui/material"
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { useRef, useState } from "react";

const Input = (props) => {

    const handleChange = (event) => {props.GetValue(event.target.value)}
    return(
            <TextField margin="normal" label = {props.label} onChange = {handleChange} {...props}/>
    )
}

export {Input}