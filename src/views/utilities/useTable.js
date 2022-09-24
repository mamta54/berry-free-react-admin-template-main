import { Table, TableCell ,TableContainer,TableHead,TablePagination,TableRow, TableSortLabel} from '@mui/material'
import React from 'react'
import { useState } from 'react'




const useTable = (records,headCells,filterFn) => {
    

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()
    const TbleContainer = props => (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" sx={{'& thead th': {backgroundColor:"#ece6f5",fontWeight:"600"},'& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#e3f2fd',
            cursor: 'pointer',
        },}}>
            {props.children}
        </Table>
        </TableContainer>
    )
    const TblHead = props => {
        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId)
        }
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false} align='center' style={{ minWidth: 170}}>
                            {headCell.disableSorting ? headCell.label :
                                <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => { handleSortRequest(headCell.id) }}>
                                {headCell.label}
                                </TableSortLabel>
                            }</TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    const TblPaging = () => (<TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />)
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }
    return {
        TbleContainer,
        TblHead,
        TblPaging,
        recordsAfterPagingAndSorting
    }
}

export default useTable