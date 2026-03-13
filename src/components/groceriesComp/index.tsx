import React from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
} from "@mui/material";

const GroceriesComponent = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='hidden lg:flex w-full h-1/5'></div>

      <div className='w-full flex flex-col gap-3 p-3' style={{border:"2px solid purple"}}>
        <h1 className='text-3xl font-extrabold lg:text-4xl appTitle'>Groceries List</h1>
        <p className='text-wrap indent-10 text-justify italic font-semibold text-md'>
          Figure out what groceries you need to procure for the week.
        </p>
      </div>

      <div className='w-full h-full' style={{border:"2px solid purple"}}>

      </div>

      <div className='w-full h-full' style={{border:"2px solid purple"}}>
        </div>      
    </div>
  )
}

export default GroceriesComponent