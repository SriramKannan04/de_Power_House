import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import {
  Box, Card,  Stack, Modal, Paper, Grid,
  Button,  TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
} from "@mui/material";  

import HomePageComponent from './components/homepageComp';
import GroceriesComponent from './components/groceriesComp';
import DishComponent from './components/dishComp';

import GroceriesIcon from './assets/iconGroc.png';
import DishIcon from './assets/iconDish.png';
import HomeIcon from './assets/iconHome.png';

import GroceriesIconDark from './assets/iconGroc2.png';
import DishIconDark from './assets/iconDish2.png';
import HomeIconDark from './assets/iconHome2.png';

import FoodGif from './assets/gifBurger2.gif';
import HomeGif from './assets/gifHome2.gif';
import GroceriesGif from './assets/gifGroceries2.gif';

function App() {

  return (
    <main className='bg-gradient-to-r from-slate-50 to-slate-300 h-screen w-screen'>

      <Box className='topImage' sx={{display:{xl:"block", lg:"block", md:"none", sm:"none", xs:"none"}}}></Box>
      <Box className='bottomImage' sx={{display:{xl:"block", lg:"block", md:"none", sm:"none", xs:"none"}}}></Box>

      <div className='flex flex-row justify-center items-center gap-3 h-full w-full'>
        
        <Box className="flex h-7/8 w-1/13 p-3" sx={{display:{xl:"flex", lg:"flex", md:"none", sm:"none", xs:"none"}}}>
          <nav className='navBarContainer w-full h-full flex flex-col gap-15 items-center justify-center'>
            <Link to={'/home'} >
              <Tooltip title="Home" placement="top">
                <aside className='iconHandler'>
                  <img src={HomeIconDark} width={35} className='iconImg1'/>
                  {/* <img src={HomeIconDark} width={35} className='iconImg3'/> */}
                  <img src={HomeGif} width={50} className='iconImg2'/>                  
                </aside>
              </Tooltip>
            </Link>
            
            <Link to={'/groceries'} >
              <Tooltip title="Groceries" placement="top">
                <aside className='iconHandler'>
                  <img src={GroceriesIconDark} width={35} className='iconImg1'/>                     
                  {/* <img src={GroceriesIconDark} width={35} className='iconImg3'/>                */}
                  <img src={GroceriesGif} width={50} className='iconImg2'/>
                </aside>
              </Tooltip>
            </Link>

            <Link to={'/dish'} >
              <Tooltip title="Dish" placement="top">
                <aside className='iconHandler'>
                  <img src={DishIconDark} width={35} className='iconImg1'/>
                  {/* <img src={DishIconDark} width={35} className='iconImg3'/> */}
                  <img src={FoodGif} width={50} className='iconImg2'/>                  
                </aside>
              </Tooltip>
            </Link>                   
            
          </nav>
        </Box>

        <Box className="w-full h-full flex flex-col" sx={{overflow:"hidden"}}>
          <Box className='headerBox w-full h-1/10 flex flex-row justify-center items-center gap-5' 
            sx={{ position:"sticky", top:0, display:{xl:"none", lg:"none", md:"flex", sm:"flex", xs:"flex"}}}
            >
              <Link to={'/home'} > 
                <h1 className='text-md text-white font-semibold'>Home</h1>
              </Link>

              <Link to={'/groceries'} >  
                <h1 className='text-md text-white font-semibold'>Groceries</h1>
              </Link>
              
              <Link to={'/dish'} > 
                <h1 className='text-md text-white font-semibold'>Dish</h1>
              </Link>                        
          </Box>
           
          <Box className='contentBox w-full h-full' sx={{overflow:"auto"}}>
        
            {/* <BrowserRouter> */}
              <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<HomePageComponent />} />
                <Route path='/groceries' element={<GroceriesComponent />} />
                <Route path='/dish' element={<DishComponent />} />
              </Routes>
            {/* </BrowserRouter> */}

          </Box>

        </Box>
      </div> 

      

      {/* <footer className="w-full h-10"></footer>      */}
    </main>
  );
}

export default App;
