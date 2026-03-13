import React from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
} from "@mui/material";

import Homies from "../../assets/homeLogo2.png";
import Location from "../../assets/iconLocation.png";

const HomePageComponent = () => {

  const address = [
    {line:"10/7 Ruk Nivas,"},
    {line:"Raja Street,"},
    {line:"Devaraj Nagar,"},
    {line:"Saligramam,"},
    {line:"Chennai, TN 600093"},
  ]

  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='hidden lg:flex w-full h-2/4'></div>

      <div className='w-full h-full flex lg:flex-row flex-col justify-center items-center gap-3'>
        <aside className="w-full lg:w-2/3 h-full flex justify-center lg:justify-start items-center lg:items-center">
          <Box sx={{ display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
            <img src={Homies} alt="Homies" width={500} />
          </Box>

          <Box sx={{ display: { xl: "none", lg: "none", md: "none", sm: "block", xs: "block" } }}>
            <img src={Homies} alt="Homies" width={300} />
          </Box>
        </aside>

        <aside className="w-full h-full flex gap-3 justify-center lg:justify-start items-center lg:items-start flex-col">
          <h1 className='text-3xl font-extrabold lg:text-5xl xl:text-5xl appTitle'>de Power House</h1>

          <section className='p-3 flex flex-col justify-center items-center gap-3'>
            <p className='text-wrap indent-5 text-justify italic font-semibold text-md'>
              We roll as five, but we move as one. Three Chartered Accountants who balance numbers with precision,
              one Cost Management Accountant who finds value in every detail, and one techie who codes solutions into reality.
            </p>
            <p className='text-wrap indent-5 text-justify italic font-semibold text-md'>
              As working professionals, we hustle through deadlines, audits, and projects, yet never lose the laughter, the chai breaks,
              or the late‑night talks that keep us grounded.
            </p>
            <p className='text-wrap indent-5 text-justify italic font-semibold text-md '>
              Together we are more than colleagues; we are homies, a squad of growth, hustle, and friendship.
              Five professionals, one promise: homies for life.
            </p>
          </section>

        </aside>
      </div>

      <Box className="w-full h-full gap-3 justify-center lg:justify-start items-center lg:items-start flex-col lg:flex-row" sx={{display:{xl:"flex", lg:"flex", md:"none", sm:"none", xs:"none"}}}>       

        <aside className="w-2/3 h-full flex flex-col gap-3 p-3 locationBox">
          <h1 className='text-xl font-extrabold lg:text-2xl xl:text-2xl appTitle'>Homie's Location</h1>
          <iframe
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            //src="https://maps.google.com/maps?q=De%20Power%20House%20Chennai&z=17&output=embed"
            src={`https://maps.google.com/maps?q=13.060979176925432,80.20280032225126&hl=es;z=14&output=embed`}
          ></iframe>
        </aside> 

        <aside className="w-1/3 h-full flex flex-row gap-3 justify-start items-center">
          <aside className='h-full mt-3'>
            <img src={Location} alt="Location" width={25} />
          </aside>

          <aside className='w-full h-full'>
            {address.map((item, index) => (
              <p key={index} className='italic font-semibold text-xl '> {item.line} </p>
            ))}
          </aside>

        </aside>            
      </Box>

      <Box className="w-full h-full p-3 gap-3 justify-center lg:justify-start items-center lg:items-start flex-col lg:flex-row" sx={{display:{xl:"none", lg:"none", md:"flex", sm:"flex", xs:"flex"}}}>       

        <aside className="w-full h-full flex flex-col justify-center items-center gap-3 p-3 locationBox2">
          <aside className='flex flex-row gap-2 justify-center items-center'>
            <img src={Location} alt="Location" width={20} />
            <h1 className='text-xl font-extrabold lg:text-2xl xl:text-2xl appTitle'>Homie's Location</h1>
          </aside>
          
          <iframe
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            //src="https://maps.google.com/maps?q=De%20Power%20House%20Chennai&z=17&output=embed"
            src={`https://maps.google.com/maps?q=13.060979176925432,80.20280032225126&hl=es;z=14&output=embed`}
          ></iframe>

          <p className='text-wrap text-center italic font-semibold text-sm'>10/7 Ruk Nivas, Raja Street, Devaraj Nagar, Saligramam, Chennai, TN 600093</p>
        </aside>                    
      </Box>

      <div className='w-full p-5 flex justify-center items-center'>
        <p className='text-wrap text-center italic font-semibold text-md'>My dear honourable 🐛🔥's if you have any suggestion, kindly ping me don't bite my d!ck</p>
      </div>
    </div>
  )
}

export default HomePageComponent
