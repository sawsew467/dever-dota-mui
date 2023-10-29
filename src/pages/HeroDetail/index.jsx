import React from 'react'
import { useParams } from 'react-router'
import { HEROES } from '../../data/heroes';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Container, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getImage } from '../../ultitis/getImage';

function HeroDetail() {
    const params = useParams();
    const hero = HEROES.filter((hero) => hero.localized_name === params.heroname)[0];
    console.log(params.heroname)
    console.log(hero)
    const breadcrumbs = [
      <Link underline="hover" key="1" color="inherit" to="/" sx ={{TextDecoder: "none"}} >
        DOTA 2 MUI
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="inherit"
        to="/heroes"
        
      >
        Heroes
      </Link>,
      <Typography key="3" color="text.primary">
        {hero.localized_name}
      </Typography>,
    ];
  return (
    <>
    <Container maxWidth="xl">
    <Stack spacing={2} sx={{marginTop: 10}} >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Stack flex={1} alignSelf={"center"}>
            <Typography variant='h1' sx = {{fontWeight: 400}}>{hero.localized_name}</Typography>
            <Typography sx ={{color: "#ccc"}}>ATTACK TYPE</Typography>
            <Typography>{hero.attack_type.toUpperCase()}</Typography>
            <Typography sx ={{color: "#ccc"}}>ROLE</Typography>
            <Typography>{hero.roles.map((role) => role.toUpperCase()).join (",")}</Typography>
        </Stack>
        <img style={{flex : 1}} src={getImage(hero)}></img>
    </Stack>
    </Container>
    </>
  )
}

export default HeroDetail