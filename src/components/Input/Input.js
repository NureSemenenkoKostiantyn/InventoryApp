import { TextField} from "@mui/material"

const Input = (props) => {

    const handleChange = (event) => {props.GetValue(event.target.value)}
    return(
            <TextField margin="normal" label = {props.label} onChange = {handleChange} {...props}/>
    )
}

export {Input}