import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const Select = (props) => {
    const { name, label, value,error=null, onChange, options } = props;
  return (
    <TextField
    {...(error && {error:true,helperText:error})}
          style={{ width: "100%" }}
          variant="outlined"
          value={value}
          onChange={onChange}
          select
          label={label}
          name={name}
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
        >
          <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
        </TextField>
  )
}

export default Select