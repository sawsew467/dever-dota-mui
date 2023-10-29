import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} marginTop={20}>
        <Typography variant='h6' sx ={{fontFamily: "Roboto"}}>WELCOME TO</Typography>
        <Typography variant='h1' sx ={{fontFamily: "Roboto", fontWeight: 700}}>DOTA 2 MUI</Typography>
        <Stack flexDirection={"row"} gap={5}>
            <Link to = {"/heroes"}><Button variant='outlined'>YOUR HEROES</Button></Link>
            <Link to = {"/battle"}><Button variant='contained'>CREATE BATTLE</Button></Link>
        </Stack>
    </Stack>
  )
}

export default Home