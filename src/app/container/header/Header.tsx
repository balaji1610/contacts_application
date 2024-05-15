import { useState } from "react";
import Grid from "@mui/material/Grid";
import Buttons from "@/app/components/button";
import DeleteIcon from "@mui/icons-material/Delete";
import Model from "@/app/components/Model";
import Table from "@/app/container/table/Table";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddContactsForm from "@/app/container/AddContacts/AddContactsForm";
export default function Header() {
  const [open, setOpen] = useState(false);
  const addClick = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };
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
          <Buttons
            variant="contained"
            text="Add"
            startIcon={<PersonAddAlt1Icon />}
            onClick={addClick}
          />
          <Model
            open={open}
            setOpen={setOpen}
            handleClose={handleCloseClick}
            title="ADD Contacts"
            component={<AddContactsForm />}
          />
        </Grid>
      </Grid>
    </div>
  );
}
