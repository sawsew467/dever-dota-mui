import { AppBar, Button, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <AppBar position = "static">
        <Container maxWidth= 'xl'>
            <Toolbar disableGutters sx ={{ display:  "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Stack flexDirection={"row"}>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography variant='h6'>DOTA2_MUI</Typography>
                </Stack>
                <Stack flexDirection={"row"} gap={10}>
                    <Link to={"/"}><Button sx ={{color: "white"}}>HOME</Button></Link>
                    <Link to={"/heroes"}> <Button sx ={{color: "white"}}>HEROES</Button></Link>
                    <Link to={"/battle"}><Button sx ={{color: "white"}}>BATTLE</Button></Link>
                </Stack>
                <PersonIcon></PersonIcon>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header