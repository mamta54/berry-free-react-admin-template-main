import { Button, Divider, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Controls from './controls/Controls'
import * as employeeService from "./services/employeeService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {Paper} from '@mui/material'
import { width } from '@mui/system'
const AvailableTable = (props) => {
    const [checked,setChecked] = useState(false)
    const [start,setStart] = useState('9:00 am')
    const [rows,setRows] = React.useState(props.rows)
const [sunday,setSunday] = React.useState(false)
const [monday,setMonday] = React.useState(false)
const [empty,setEmpty] = React.useState()
const [age,setAge] = React.useState()
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
       <>

      
          
            <TableRow
              key="1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{padding:"0px"}}>
                dhruvi
              </TableCell>
              <TableCell align="right" >
    <Switch checked={sunday} onChange={()=>setSunday(!sunday)}/>
              </TableCell>
            {
              sunday  ?
              <TableCell align="right" >
            
              <Table sx={{ }} aria-label="simple table">
         
          <TableBody>
                    {rows.map((item, idx) => (
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
                        <Button 
                            onClick={handleRemoveSpecificRow(idx)}
                          >
                            Remove
                            </Button>
                        </TableCell> 
                    </TableRow>
                  ))}
              </TableBody>
              </Table>
              <Button variant="contained" onClick={handleAddRow} >
                Add Row
              </Button>
              
            
              </TableCell>
              :
              <TableCell sx={{minWidth:"300px"}}></TableCell>
  }
            </TableRow>
           
      
   
  </>
  )
}

export default AvailableTable