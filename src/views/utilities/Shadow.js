import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import useTable from './useTable';
import { InputAdornment, TableBody, TableCell, TableRow, Toolbar } from '@mui/material';
import * as employeeService from "./services/employeeService";
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Controls from './controls/Controls';
import { Search } from '@mui/icons-material';
import SearchSection from './SearchSection';

const headCells = [
    {id:'firstname', label:'First Name'},
    {id:'lastname', label:'Last Name'},
    {id:'doctor', label:'Doctor Name'},
    {id:'city', label:'City', disableSorting: true},
    {id:'gender', label:'Gender'},
    {id:'mobno', label:'Mobile No.'},
    {id:'appointmentdate', label:'Appoinemnt Date'},
]

const Shadow = () => {
    
    const [records,setRecords] = useState(employeeService.getAllappointments())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.firstname.toLowerCase().includes(target.value.toLowerCase())
                     || x.lastname.toLowerCase().includes(target.value.toLowerCase())
                     || x.mobno.includes(target.value)
                     )
            }
        })
    }
    const  {
        TbleContainer,
        TblHead,
       TblPaging,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells,filterFn);

    
    return (
        <MainCard title="Basic Shadow" secondary={<SearchSection onChange={handleSearch}/>}>
             <Paper sx={{ width: '100%' }}>
            <TbleContainer >
                <TblHead/>
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                <TableCell  align='center'>{item.firstname}</TableCell>
                                <TableCell align='center'>{item.lastname}</TableCell>
                                <TableCell align='center'>{item.doctorr}</TableCell>
                                <TableCell align='center'>{item.city}</TableCell>
                                <TableCell align='center'>{item.gender}</TableCell>
                                <TableCell align='center'>{item.mobno}</TableCell>                             
                                <TableCell align='center'>{item.appointmentdate}</TableCell>
                                
                            </TableRow>
                        ))
                    }
                </TableBody>
            </TbleContainer>
            <TblPaging/>
            </Paper>
        </MainCard>
    )
}

export default Shadow