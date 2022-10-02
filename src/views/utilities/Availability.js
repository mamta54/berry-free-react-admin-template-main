import { Divider, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Controls from './controls/Controls'
import * as employeeService from "./services/employeeService";
import AvailableTable from './AvailableTable'
import {Paper} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

const Availability = () => {
    const [checked,setChecked] = useState(false)
    const [start,setStart] = useState('9:00 am')
    const [sundayrows,setSundayrows] = React.useState([{}])
    const [mondayrows,setMondayrows] = React.useState([{}])

  return (
       <>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={7}>
      <MainCard title="Schedule Appointment" >
      <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
       
        <TableBody>
<AvailableTable title="Sunday" rows={sundayrows} />
<Divider/>
<AvailableTable title="Monday" rows={mondayrows} />
</TableBody>
      </Table>
    </TableContainer>
   </MainCard>
   </Grid>
   <Grid item xs={12} sm={5}>
      <MainCard title="Schedule Appointment" >
  <Divider/>
  
   </MainCard>
   </Grid>
   </Grid>
  </>
  )
}

export default Availability