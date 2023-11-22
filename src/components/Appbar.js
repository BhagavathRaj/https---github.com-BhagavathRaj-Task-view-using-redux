
import { Link } from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import { AppBar,  IconButton, Toolbar, Typography } from '@mui/material';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Badge from '@mui/material/Badge';
import FileOpenIcon from '@mui/icons-material/FileOpen';
const Appbar = () => {
  const Items = useSelector((state) => state.favor);
  const [notify,setNotify]=useState(0)
  useEffect(()=>{
    setNotify(Items?.length)
  })
  return (
    <div>
      <AppBar position="static"  sx={{ background: 'black' }}>
        <Toolbar variant="regular" >
          <IconButton
             size="large"
            edge="start"
            color="inherit"
            alignItems="center"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            
          </IconButton>
          <Typography variant="h5" alignItems="center" component="div" style={{ textDecoration: 'none',
            color:'#j768285',
            display: 'flex',
            justifyContent: 'center',
             padding:'4px' }}>
            Title Task App
          </Typography>
          
        </Toolbar>
        
      </AppBar>
      <Link to={"/favorite"}>
      <IconButton sx={{float: "right",marginTop:"-43px",marginRight:"50px"}}>
      <Badge color="secondary" badgeContent={notify} showZero>
      <FileOpenIcon color='secondary'/>
      </Badge>
      </IconButton>
      </Link>
    </div>
  );
};

export default Appbar;
