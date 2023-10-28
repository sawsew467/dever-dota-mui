import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { HEROES } from "../../data/heroes";
import { useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function HeroDetail() {
  let { id } = useParams();

  const idHero = id.substring(1);

  const index = Number(idHero);

  const hero = HEROES.filter((hero) => hero.id === index)[0];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dota 2 MUI
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/heroes">
      Heroes
    </Link>,
    <Typography key="3" color="text.primary">
      {hero.localized_name}
    </Typography>,
  ];
  return (
    <>
      <Stack
        direction="row" spacing={2}
        sx={{
          Height: "100vh",
          marginTop:4,
          marginRight:10,
          marginLeft:8
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "flex-start",
            marginTop: 10,
            marginLeft: 10,
            alignSelf:'center'
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              width: "100%",
              display: "inline",
            }}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <Typography
              sx={{
                marginTop: 10,
                fontSize: "5rem",
                fontWeight: "300",
                textTransform: "uppercase",
                lineHeight:1.16
              }}
            >
              {hero.localized_name}
            </Typography>
          </Stack>
          <Box>
            <Typography
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.3,
                opacity: 0.5,
                fontWeight: 400,
              }}
            >
              ATTACK TYPE
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box component="img" src="https://dota-mui.vercel.app/assets/melee%201-777c885e.svg"
              sx={{
                width:"20px",
              }}></Box>
            <Typography
              sx={{
                fontSize: "1.25rem",
                textTransform: "uppercase",
                lineHeight: 1.6,
              }}
            >
              {hero.attack_type}
            </Typography>
            </Stack>
            
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.3,
                opacity: 0.5,
                fontWeight: 400,
              }}
            >
              ROLE
            </Typography>
            <Stack direction="row">
              {hero.roles.map((role, index) =>
                hero.roles.length !== index + 1 ? (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      lineHeight: 1.6,
                    }}
                  >
                    {`${role},`}
                  </Typography>
                ) : (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      lineHeight: 1.6,
                    }}
                  >
                    {role + ""}
                  </Typography>
                )
              )}
            </Stack>
          </Box>
        </Stack>
        <Box
          component="img"
          src={"https://api.opendota.com" + hero.img}
          sx={{
            display: "flex",
            objectFit: "cover",
            width: "60vw",
            alignSelf:"center",
            borderRadius:"4px"
          }}
        ></Box>
      </Stack>
    </>
  );
}

export default HeroDetail;
