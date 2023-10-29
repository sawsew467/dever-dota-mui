/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import getImageUrl from "../../../ultils/getImageUrl";

function HeroList(props) {
  const { roleList } = props;

  return (
    <Box sx={{ flexGrow: 1, position: "static", mt: "5%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {roleList.map((role) => (
          <Grid key={role.id} item xs={3} sm={4} md={3}>
            <img src={getImageUrl(role.img)} alt={role.localized_name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HeroList;
