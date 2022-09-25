import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import useTable from './useTable';
import { InputAdornment, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import * as employeeService from "./services/employeeService";
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Controls from './controls/Controls';
import { Search } from '@mui/icons-material';
import SearchSection from './SearchSection';

const headCells = [
    {id:'sr', label:'Sr No.',minWidth: 30,},
    {id:'caseno', label:'Case No.',minWidth: 40,},
    {id:'firstname', label:'First Name',minWidth: 100,},
    {id:'lastname', label:'Last Name',minWidth: 100,},
    {id:'service', label:'Service',minWidth: 100,},
    {id:'price', label:'Price',minWidth: 70,},
    {id:'doctor', label:'Doctor Name',minWidth: 100,},
    {id:'appointmentdate', label:'Appoinemnt Date',minWidth: 90,},
    {id:'time', label:'Time',minWidth: 70,},
    {id:'mobno', label:'Mobile No.',minWidth: 100,},
    {id:'continue', label:'Continue',minWidth: 50,},

]

const Shadow = () => {
    
    const [records,setRecords] = useState(employeeService.getAllappointments())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [total,setTotal] = useState(0)
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
        <>
        <MainCard title="Basic Shadow" secondary={<SearchSection onChange={handleSearch}/>}>
             <Paper sx={{ width: '100%' }}>
            <TbleContainer >
                <TblHead/>
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item => (
                            
                            <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                <TableCell  align='center' >{item.id}</TableCell>
                                <TableCell  align='center'>{item.caseno}</TableCell>
                                <TableCell  align='center'>{item.firstname}</TableCell>
                                <TableCell align='center'>{item.lastname}</TableCell>
                                <TableCell align='center'>{item.services}</TableCell>
                                <TableCell align='center'>{item.price}</TableCell>
                                <TableCell align='center'>{item.doctorr}</TableCell>
                                <TableCell align='center'>{item.appointmentdate}</TableCell>
                                <TableCell align='center'>{item.time}</TableCell>
                                <TableCell align='center'>{item.mobno}</TableCell>  
                                <TableCell align='center'>{item.continue}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </TbleContainer>
            <TblPaging/>
            </Paper>
        </MainCard>
        
         
       
        </>
    )
}

export default Shadow