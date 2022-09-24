import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import useTable from './useTable';
import { TableBody, TableCell, TableRow } from '@mui/material';
import * as employeeService from "./services/employeeService";
import { useState } from 'react';


const headCells = [
    {id:'firstname', label:'First Name'},
    {id:'lastname', label:'Last Name'},
    {id:'doctor', label:'Doctor Name'},
    {id:'city', label:'City'},
    {id:'gender', label:'Gender'},
    {id:'mobno', label:'Mobile No.'},
    {id:'appointmentdate', label:'Appoinemnt Date'},


]

const Shadow = () => {
    const [records,setRecords] = useState(employeeService.getAllappointments())
    const  {
        TbleContainer,
        TblHead
    } = useTable(records,headCells);

    
    return (
        <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
            <TbleContainer>
                <TblHead/>
                <TableBody>
                    {
                        records.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.firstname}</TableCell>
                                <TableCell>{item.lastname}</TableCell>
                                <TableCell>{item.doctor}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.mobno}</TableCell>                             
                                <TableCell>{item.appointmentdate}</TableCell>
                                
                            </TableRow>
                        ))
                    }
                </TableBody>
            </TbleContainer>
        </MainCard>
    )
}

export default Shadow