
import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
const Carts = () => {
  const Items = useSelector(state=> state.favor)
  useEffect(() => {
   console.log(Items)
  });
  return (
    <div>
      <h1>Favorite List</h1>
      <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography variant="h5" gutterBottom>
        ID
      </Typography>
            </TableCell>
            <TableCell>
            <Typography variant="h5" gutterBottom>
        Title
      </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Items.map((data)=>{
          return(<TableRow>
            <TableCell>{data.data.id}</TableCell>
            <TableCell>{data.data.title}</TableCell>
          </TableRow>)
        })}
        </TableBody>
      </Table>
      <Link to='/' style={{ textDecoration: 'none',
            color:'white', backgroundColor:'black',
            border: '2px solid black', padding:'10px' }} >  Home Page </Link>
      </Card>
    </div>
  );
};

export default Carts;
