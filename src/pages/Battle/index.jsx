import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../../components/home/header";

function Battle() {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          maxWidth: "1200px",
          // minWidth: "100vw",
          // minHeight: "100vh",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          padding: "80px 24px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }} mb={3}>
          DOTA 2 FUNNY BATTLE
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack>
            <Card
              sx={{
                width: 400,
                height: 200,
                backgroundColor: "rgb(238, 238, 238)",
                marginBottom: "8px",
              }}
            ></Card>
            <Button variant="contained">Random</Button>
          </Stack>
          <Button variant="contained">Fight</Button>
          <Stack>
            <Card
              sx={{
                width: 400,
                height: 200,
                backgroundColor: "rgb(238, 238, 238)",
                marginBottom: "8px",
              }}
            ></Card>
            <Button variant="contained">Random</Button>
          </Stack>
        </Container>
        <Divider />
      </Box>
    </>
  );
}

export default Battle;
