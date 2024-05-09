import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, styled, Button } from '@mui/material';
import { useState } from 'react';

const Component = styled(Box)`
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

const defaultObj=[{
    id: 101,
    name: 'Deepak',
    email: 'deepak@gmail.com',
    phone: 1234567890,
    salary: 2000,
    age: 22,
}]

const Users = () => {

    const [users, setUsers] = useState(defaultObj);

    const removeEntry=(id)=>{
        const updatedUsers=  users.filter(user=>user.id !==id);
        setUsers(updatedUsers);
    }

    return (
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
                        {
                            users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.salary}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell><Button variant="contained" color="error" onClick={()=>removeEntry(user.id)} >Remove</Button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </Component>
    )
}

export default Users;