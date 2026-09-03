import React, { useState } from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip,
  Checkbox
} from "@mui/material";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SplitText from "../../utilis/SplitText";
import { imagePath } from '../../utilis/imageHander';

const GroceriesComponent = () => {

  const [explode, setExplode] = useState<number | null>(null);

  const expandHandler = (exp: number) => {
    setExplode(prev => (prev === exp ? null : exp));
  };


  
  const groceriesList = [
    {
      id:1,
      category:"Cooking Essentials",
      items:[
        {english:"Rice",                    tamil:"அரிசி",              quantity:"5kg",       img:imagePath.riceImg},
        {english:"Pongal Rice",             tamil:"பொங்கல் அரிசி",   quantity:"1 Pack",    img:imagePath.pongalRiceImg},
        {english:"India Gate Briyani rice", tamil:"பிரியாணி அரிசி",   quantity:"1kg",       img:imagePath.briyaniRiceImg},
        {english:"Sakthi Turmeric Powder",  tamil:"மஞ்சள் தூள்",       quantity:"250g",      img:imagePath.turmericPowderImg},
        {english:"Tata Salt",               tamil:"கல் உப்பு",          quantity:"500g",      img:imagePath.saltImg},        
        // {english:"", tamil:"", quantity:"", img:""},
        // {english:"", tamil:"", quantity:"", img:""},
      ]
    },
    {
      id:2,
      category:"Vegetables",
      items:[
        {english:"Carrot", tamil:"கேரட்", quantity:"500g", img:""},
        {english:"Brinjal", tamil:"கத்தரிக்காய் ", quantity:"2kg", img:""},
      ]
    },
    {
      id:3,
      category:"Extras",
      items:[
        {english:"Brush", tamil:"", quantity:"1", img:""},
        {english:"Harphic", tamil:"", quantity:"2kg", img:""},
      ]
    },
  ];



  //handle selection
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const allSelect = groceriesList.flatMap(list => list.items).length > 0 && selectedItems.length === groceriesList.flatMap(list => list.items).length;
  const someSelected =  selectedItems.length > 0 && selectedItems.length < groceriesList.flatMap(list => list.items).length;

  const handleSelectAll = (event : React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedItems(groceriesList.flatMap(list => list.items).map((_, index) => index));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSingleSelect = (index:number) => {
    setSelectedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='hidden lg:flex w-full h-1/20'></div>

      <div className='w-full flex flex-col gap-3 p-3'>
        {/* <h1 className='text-3xl font-extrabold lg:text-4xl appTitle'>Groceries List</h1> */}
        <SplitText
          text="Groceries List"
          className="text-3xl font-extrabold lg:text-5xl xl:text-5xl "
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />

        <p className='text-wrap indent-10 text-left italic font-semibold text-md'>
          Figure out what groceries you need to procure for the week.
        </p>
      </div>

      <div className='w-full p-3 flex flex-col justify-start items-center gap-3'>
        {groceriesList.map((list, index) => (
          <Card key={index} className='w-full lg:w-3/4 p-3'>
            <aside className='w-full flex flex-row justify-between items-center p-1'>
              <h1 className='text-sm lg:text-xl font-bold'>{list.category}</h1>

              <aside className="arrowHandler" onClick={()=>expandHandler(Number(list.id))}>
                {explode === list.id ? <KeyboardArrowUpIcon /> :<KeyboardArrowDownIcon />}
              </aside>
            </aside>

            {explode === list.id && (
              <Box className='w-full p-3 flex flex-col gap-5' sx={{display:{xl:'flex', lg:'flex', md:'none', sm:'none', xs:'none'}}}>
                <TableContainer  component={Paper} elevation={0} className="subTableBox">
                  <Table>
                    <TableHead className='headerRow'> 
                      <TableRow>                        
                        <TableCell className='subheaderCell'>
                          <Checkbox 
                            className="selectAll" 
                            checked={allSelect}
                            indeterminate={someSelected}
                            onChange={handleSelectAll}
                            sx={{
                            color: "#F2F2F2",
                            '&.Mui-checked': {
                              color: "#FFEDB9"
                            },
                          }}
                          />
                        </TableCell>

                        <TableCell className='subheaderCell'></TableCell>
                        <TableCell className='subheaderCell'>English</TableCell>
                        <TableCell className='subheaderCell'>Tamil</TableCell>
                        <TableCell className='subheaderCell'>Quantity</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {list.items.map((subData, index) => (
                        <TableRow key={index}>
                          <TableCell className='subCell'>
                            <Checkbox
                              className="selectSingle"
                              checked={selectedItems.includes(index)}
                              onChange={() => handleSingleSelect(index)}
                              sx={{
                                color: "#000000",
                                '&.Mui-checked': {
                                  color: "#2C2C2C"
                                },
                              }} />
                          </TableCell>

                          <TableCell className='subCell'><img src={subData.img}  width={80} style={{borderRadius:10}} /></TableCell>
                          <TableCell className='subCell'>{subData.english}</TableCell>
                          <TableCell className='subCell'>{subData.tamil}</TableCell>
                          <TableCell className='subCell'>{subData.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>                
              </Box>              
            )}            
          </Card>
        ))}        
      </div>
    </div>
  )
}

export default GroceriesComponent;
