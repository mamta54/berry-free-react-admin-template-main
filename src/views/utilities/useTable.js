import {  Table, TableCell ,TableHead,TableRow} from '@mui/material'
import React from 'react'




const useTable = (records,headCells) => {
    // const classes = useStyles()
    const TbleContainer = props => (
        <Table >
            {props.children}
        </Table>
    )
    const TblHead = props => {
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id}>
                                {headCell.label}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    }
    return {
        TbleContainer,
        TblHead
    }
}

export default useTable