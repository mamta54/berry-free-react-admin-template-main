import { Divider, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Controls from './controls/Controls'
import * as employeeService from "./services/employeeService";
import AvailableTable from './AvailableTable'
import {Paper} from '@mui/material'
const Availability = () => {
    const [checked,setChecked] = useState(false)
    const [start,setStart] = useState('9:00 am')
  return (
       <>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={7}>
      <MainCard title="Schedule Appointment" >
<AvailableTable/>
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