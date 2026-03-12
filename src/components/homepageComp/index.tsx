import React from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
} from "@mui/material";

import Homies from "../../assets/homeLogo2.png";

const HomePageComponent = () => {
  return (
    <Box className='w-full h-full flex flex-col gap-3'>
      <div className='w-full h-full flex flex-col items-center justify-center' >
        <img src={Homies} alt="Homies" width={300}/>
        <h1 className='text-3xl font-extrabold lg:text-6xl xl:text-6xl'>de Power House</h1>
      </div>

      <div className='w-full flex flex-col items-start justify-center p-3' >
        <p className='text-wrap text-justify italic font-semibold indent-10 text-md lg:text-xl xl:text-xl'>
          We roll as five, but we move as one. Three Chartered Accountants who balance numbers with precision, 
          one Cost Management Accountant who finds value in every detail, and one techie who codes solutions into reality. 
          As working professionals, we hustle through deadlines, audits, and projects, yet never lose the laughter, the chai breaks, 
          or the late‑night talks that keep us grounded. Our strength lies in diversity — finance, cost, and tech united. 
          Together we are more than colleagues; we are homies, a squad of growth, hustle, and friendship. 
          Five professionals, one promise: homies for life.
        </p>
      </div>

      <div className='w-full h-full' >
        <p className='text-wrap text-justify italic font-semibold indent-10 text-md lg:text-xl xl:text-xl'>
          Dear 🐛🔥's if you have any suggestion, kindly ping me don't bite me d!ck
        </p>
      </div>
    </Box>
  )
}

export default HomePageComponent