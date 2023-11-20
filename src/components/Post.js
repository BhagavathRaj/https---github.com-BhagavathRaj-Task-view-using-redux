

import {
    Card,
    Table,
    TableHead,
    TableBody,
    TableRow,
    Button,
    TableCell,
   
    Typography
  } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addFovor } from "../actions/addFovor";
function Post() {
    const dispatch=useDispatch();
    const favor=useSelector((state)=>state.favor);
    const [data,setData]=useState();
    const {postId} = useParams();

    const addFavorite=async()=>{
        try {
        dispatch(addFovor(data))
        console.log("Favor State",favor)
        
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        try {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res)=>{
                console.log(res.data);
                setData(res.data)
            })
        } catch (error) {
            
        }
        
        console.log('Post component did mount',postId);
    },[])
    return (
        <div>
           <center>
            <h1>Post ID {postId} Data</h1>
            <h2>  Custom Images</h2>
            <img src="https://source.unsplash.com/collection/928423/520x320"/>
            </center> 
            <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography variant="h5" gutterBottom>
        Title
      </Typography>
            </TableCell>
            
            <TableCell>
            <Typography variant="h5" gutterBottom>
        Add
      </Typography>

                
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                
               
                <TableCell>
                {data?.body}
                </TableCell>
                <TableCell>
                    <Button onClick={() => addFavorite()} variant="contained"
                       style={{ backgroundColor: '#333', color: '#ffffff' }} color="primary">Add Favorite</Button>
                </TableCell>
            </TableRow>
        </TableBody>
        </Table>
        </Card>   
        </div>
    );
}

export default Post;