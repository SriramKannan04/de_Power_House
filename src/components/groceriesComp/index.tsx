import React, { useState } from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
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
        {english:"Rice", tamil:"அரிசி", quantity:"5kg", img:imagePath.riceImg},
        {english:"Pongal Rice", tamil:"பொங்கல் அரிசி", quantity:"1 Pack", img:imagePath.pongalRiceImg},
        {english:"India Gate Briyani rice", tamil:"பிரியாணி அரிசி", quantity:"1kg", img:imagePath.briyaniRiceImg},
        {english:"Sakthi Turmeric Powder", tamil:"மஞ்சள் தூள்", quantity:"250g", img:imagePath.turmericPowderImg},
        {english:"Tata Salt", tamil:"கல் உப்பு", quantity:"500g", img:imagePath.saltImg},        
        {english:"", tamil:"", quantity:"", img:""},
        {english:"", tamil:"", quantity:"", img:""},
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
          <Card key={index} className='w-full lg:w-3/4 p-3 arrowHandler' onClick={()=>expandHandler(Number(list.id))}>
            <aside className='w-full flex flex-row justify-between items-center p-1'>
              <h1 className='text-sm lg:text-xl font-bold'>{list.category}</h1>

              <aside>
                {explode === list.id ? <KeyboardArrowUpIcon /> :<KeyboardArrowDownIcon />}
              </aside>
            </aside>

            {explode === list.id && (
              <aside className='w-full p-3 flex flex-col gap-5'>
                {list.items.map((subData, index) => (
                  <aside className='w-full flex flex-col lg:flex-row gap-3 justify-start items-start lg:items-center' key={index}>
                    <img src={subData.img}  width={80} style={{borderRadius:10}} />

                    <aside className='w-full flex flex-row gap-3 justify-start items-center'>
                      <p className='text-sm xl:text-base font-semibold text-wrap'>{subData.english}</p>
                      <p className='text-sm xl:text-base font-semibold text-wrap'>{subData.tamil}</p>
                      <p className='text-sm xl:text-base font-semibold text-wrap'>{subData.quantity}</p>
                    </aside>
                    
                  </aside>
                ))}
              </aside>              
            )}            
          </Card>
        ))}        
      </div>
    </div>
  )
}

export default GroceriesComponent;
