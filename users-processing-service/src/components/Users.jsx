import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';

const Component=styled(Box)`
    width:80%;
    margin: 50px auto;
    & > h4{
        margin-bottom: 20px;
        text-align: center;
    }
    & > div > table > thead > tr > th{
        background-color: tomato;
        color: #FFFFFF;
        font-weight: 100px;
        font-size: 16px;
    }

    & > div > table > tbody > tr > td{
        font-size: 20px;
    }

`



const Users=()=>{

    return(
        <Component>
            <Typography variant="h4" color="initial">My Custom Table</Typography>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Remove Entry</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>101</TableCell>
                            <TableCell>Deepak</TableCell>
                            <TableCell>deepak@gmail.com</TableCell>
                            <TableCell>7414</TableCell>
                            <TableCell>2000</TableCell>
                            <TableCell>23</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Component>
    )
}

export default Users;