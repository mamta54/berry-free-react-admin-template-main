import React from 'react'

const Date = (props) => {
    const { name, label, defaultValue} = props;
  return (
    <TextField
    fullWidth
name={name}
label={label}

defaultValue={defaultValue}
InputLabelProps={{ shrink: true, required: true }}
type="date"
sx={{


    "& .MuiInputBase-root": {
        height: "46px"
    }
    }}
/>
  )
}

export default Date