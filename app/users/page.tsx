import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import DeleteButton from '../components/DeleteButton';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    suite: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }

}

const columns = [
  { field: 'name', headerName: 'Name' },
  { field: 'username', headerName: 'Username' },
  { field: 'email', headerName: 'Email' },
  { field: 'address', headerName: 'Address' },
  { field: 'phone', headerName: 'Phone' },
  { field: 'website', headerName: 'Website' },
  { field: 'company', headerName: 'Company' },
  { field: 'button', headerName: '' }
]

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
  <>
    <h1>Users</h1>
    <p>{ new Date().toLocaleTimeString() }</p>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell align='left' key={column.field}>{column.headerName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.username}</TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">`${row.address.street}, ${row.address.city}`</TableCell>
            <TableCell align="left">{row.phone}</TableCell>
            <TableCell align="left">{row.website}</TableCell>
            <TableCell align="left">{row.company.name}</TableCell>
            <TableCell>
              <DeleteButton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
  )
}

export default UsersPage
