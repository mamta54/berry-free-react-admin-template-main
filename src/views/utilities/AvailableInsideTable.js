import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AvailableInsideTable = (props) => {
    const [age,setAge] = React.useState('')
const [rows,setRows] = React.useState(props.rows)

 const handleChangeSelect = (event) => {

 setAge( event.target.value)

  };
  
  const handleRemoveSpecificRow = (idx) => () => {
    const rowst = [...rows]
    rowst.splice(idx, 1)
    setRows( rowst )

  }

  const handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...rows];
    rows[idx] = {
      [name]: value
    };
    setRows({
      rows
    });
  };
  const handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    setRows(
     [...rows, item]
    );
  };
  
  const handleRemoveRow = () => {
    const roww =rows.slice(0, -1)
 setRows(
     roww
    );
  };
  return (
    <div>

<TableCell align="right">
            
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
       
        <TableBody>
                  {props.rows.map((item, idx) => (
                    <TableRow id="addr0" key={idx}>
                      <TableCell sx={{borderBottom:"none"}}>
                      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChangeSelect}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
                      </TableCell>
                      <TableCell sx={{borderBottom:"none"}}>
                      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          
          onChange={handleChangeSelect}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
                      </TableCell>
                      <TableCell sx={{borderBottom:"none"}}>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </TableCell> 
                  </TableRow>
                ))}
            </TableBody>
            </Table>
            <button onClick={handleAddRow} className="btn btn-primary">
              Add Row
            </button>
            
          
            </TableCell>
    </div>
  )
}

export default AvailableInsideTable