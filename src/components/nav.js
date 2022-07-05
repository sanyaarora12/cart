import React from 'react';
import "../styles/nav.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from "@mui/material/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Nav=({ setShow, size,sizes })=> {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius:'50px',
    backgroundColor: '#000093',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft:0,
    marginTop:'6px',
    width: '90%',
    height:'40px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginLeft:'75px',
      width: '330px',
      
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));

  const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      color: "black",
      backgroundColor: "#F7AB20"
    }
  });
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <>
    <ul>
    {/* <li><img id="im" src={yellow1} alt="" width="50px" height="50px"/></li> */}
    <li><a className="active" href="#home">Category</a></li>
    <li><a href="#news">Brands</a></li>
    <li><a href="#contact">My Business</a></li>
    <li><div className='inp'>
                <Search >
            <SearchIconWrapper>
              <SearchIcon style={{color:'white'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Jio"
              inputProps={{ 'aria-label': 'search' }}
            />
            <MicIcon style={{color:'white',marginLeft:'60px',marginTop:'5px'}}/>
          </Search>
      </div></li>
  {/* <li className='icons'>
  <ViewInArIcon style={{color:'white'}} />
      </li> */}
      <li className='icon1'>
      <IconButton size="large" aria-label="show new mails">
        <StyledBadge>
              <Badge badgeContent={45} color="error" >
              <NotificationsIcon style={{color:'white'}}/>
              </Badge>
              </StyledBadge>
            </IconButton>
      </li>
      <li className='icon2'>
      <IconButton size="large" aria-label="show new mails">
      <StyledBadge>
              <Badge  color="error" >
              <div className="cart" onClick={() => setShow(false)}>
              <ShoppingCartIcon style={{color:'white'}}/>
              <div id="a">{size}</div>
              </div>
              </Badge>
              </StyledBadge>
            </IconButton>
    
    </li>
    <li className='icon3'>
      <IconButton size="large" aria-label="">
              <div onClick={() => setShow(false)}>
              <FavoriteBorderIcon style={{color:'white'}}/>
              <div id="a">{sizes}</div>
              </div>
            </IconButton>
    
    </li>
</ul>

    </>
  )
}
export default Nav;