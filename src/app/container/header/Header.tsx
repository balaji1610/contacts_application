import Grid from "@mui/material/Grid";
import Buttons from "@/app/components/Button";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Header() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        height="100px"
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h1>Contacts</h1>
        </Grid>
        <Grid item xs={4}>
          <Buttons variant="contained" text="Add" startIcon={<DeleteIcon />} />
        </Grid>
      </Grid>
    </div>
  );
}
