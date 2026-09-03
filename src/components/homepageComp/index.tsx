import React from 'react';

import {
  Box, Card, Stack, Modal, Paper, Grid,
  Button, TextField, Typography, MenuItem, Drawer, Autocomplete,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Table,
  IconButton, Radio, Tooltip
} from "@mui/material";

import SplitText from "../../utilis/SplitText";

import Homies from "../../assets/homeLogo2.png";
import Location from "../../assets/iconLocation.png";

const HomePageComponent = () => {

  // const handleAnimationComplete = () => {
  //   console.log('All letters have animated!');
  // };

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
          <Box className='' sx={{ display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
            <img src={Homies} alt="Homies" width={500}/>
          </Box>

          <Box className='' sx={{ 
            display: { xl: "none", lg: "none", md: "none", sm: "block", xs: "block" },
            marginTop: { sm: "20px", xs: "20px" }
            }}>
            <img src={Homies} alt="Homies" width={300}/>
          </Box>
        </aside>

        <aside className="w-full h-full flex gap-3 justify-center items-center flex-col lg:items-start">
          {/* <h1 className='text-3xl font-extrabold lg:text-5xl xl:text-5xl appTitle'>de Power House</h1> */}
          <SplitText
            text="de Power House"
            className="text-3xl font-extrabold lg:text-5xl xl:text-5xl"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}            
          />

          <section className='p-3 w-5/6 flex flex-col justify-center items-start gap-3'> {/*  style={{border:"1px solid black"}}  */}
            <p className='text-wrap text-left italic font-semibold text-md'>
              We roll as five, but we move as one. Three Chartered Accountants who balance numbers with precision,
              one Cost Management Accountant who finds value in every detail, and one techie who codes solutions into reality.
            </p>
            <p className='text-wrap text-left italic font-semibold text-md'>
              As working professionals, we hustle through deadlines, audits, and projects, 
              yet never lose the laughter, the tea breaks, or the late‑night talks that keep us grounded.
            </p>
            <p className='text-wrap text-left italic font-semibold text-md '>
              Together we are more than colleagues; we are homies, a squad of growth, hustle, and friendship.
              Five professionals, one promise: homies for life.
            </p>
          </section>

        </aside>
      </div>

      <Box className="w-full h-full gap-3 justify-center lg:justify-start items-center lg:items-start flex-col lg:flex-row" sx={{display:{xl:"flex", lg:"flex", md:"none", sm:"none", xs:"none"}}}>       

        <aside className="w-2/3 h-full flex flex-col gap-4 p-3 locationBox">
          {/* <h1 className='text-xl font-extrabold lg:text-2xl xl:text-2xl appTitle'>Homie's Location</h1> */}

          <div className='flex flex-row gap-2 justify-start items-center'>
            <img src={Location} alt="Location" width={25} />

            <SplitText
            text="Homie's Location"
            className="text-xl font-extrabold lg:text-2xl xl:text-2xl"
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
          </div>
          
          {/* <iframe
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=13.060974358531002,80.20280006328622&hl=es;z=14&output=embed`}
            style={{
              borderRadius:"10px",
              // border:"1px solid black",
            }}
          ></iframe> */}

          <iframe 
            width="100%" 
            height="300"  
            allowFullScreen loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            style={{borderRadius:"15px",}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6854287330809!2d80.2028027714419!3d13.060916979935715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700618a0f79%3A0x51396ae78d757fc!2sDe%20Power%20House!5e1!3m2!1sen!2sin!4v1788355226689!5m2!1sen!2sin">
          </iframe>

          <p className='text-wrap text-start italic font-semibold text-sm'>10/7 Ruk Nivas, Raja Street, Devaraj Nagar, Saligramam, Chennai, TN 600093</p>
        </aside>           
      </Box>

      <Box className="w-full p-3 gap-3 justify-center lg:justify-start items-center lg:items-start flex-col lg:flex-row" sx={{display:{xl:"none", lg:"none", md:"flex", sm:"flex", xs:"flex"}}}>       

        <div className="w-full flex flex-col justify-center items-center gap-3 p-3 locationBox2">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6854287330809!2d80.2028027714419!3d13.060916979935715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700618a0f79%3A0x51396ae78d757fc!2sDe%20Power%20House!5e1!3m2!1sen!2sin!4v1788355226689!5m2!1sen!2sin"
            //src={`https://maps.google.com/maps?q=13.060979176925432,80.20280032225126&hl=es;z=14&output=embed`}
          ></iframe>        
          
          <p className='text-wrap text-center italic font-semibold text-sm'>10/7 Ruk Nivas, Raja Street, Devaraj Nagar, Saligramam, Chennai, TN 600093</p>
        </div>                    
      </Box>

      

      <Box className='w-full p-5 justify-end items-end' sx={{display:{xl:"block", lg:"block", md:"none", sm:"none", xs:"none"}}}>
        <p className='text-wrap text-end italic font-semibold text-sm'>My dear honourable 🐛🔥's if you have any suggestion,</p>
        <p className='text-wrap text-end italic font-semibold text-sm'>kindly ping me don't bite my <span className='text-lg'>d!ck</span></p>
      </Box>

      <Box className='bg-gradient-to-r from-slate-900 to-slate-900 w-full p-5 justify-center items-center' sx={{display:{xl:"none", lg:"none", md:"block", sm:"block", xs:"block"}}}>
        <p className='text-wrap text-center italic text-sm text-white'>My dear honourable 🐛🔥's if you have any suggestion</p>
        <p className='text-wrap text-center italic text-sm text-white'>kindly ping me don't bite my d!ck</p>
      </Box>
    </div>
  )
}

export default HomePageComponent

