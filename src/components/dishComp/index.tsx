import React from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
} from "@mui/material";

import SplitText from "../../utilis/SplitText";

const DishComponent = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='hidden lg:flex w-full h-1/20'></div>

      <div className='w-full flex flex-col gap-3 p-3' style={{ border: "2px solid purple" }}>
        {/* <h1 className='text-3xl font-extrabold lg:text-4xl appTitle'>Food Menu</h1> */}

        <SplitText
          text="Food Menu"
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

        <p className='text-wrap indent-10 text-justify italic font-semibold text-md'>
          Browse the delicious cuisine for the week.
        </p>
      </div>

      <div className='w-full h-full' style={{ border: "2px solid purple" }}>

      </div>
    </div>
  )
}

export default DishComponent


