import { useState } from "react";
import Grid from "@mui/material/Grid";
import Buttons from "@/app/components/button";
import DeleteIcon from "@mui/icons-material/Delete";
import Model from "@/app/components/Model";
import Table from "@/app/container/table/Table";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddContactsForm from "@/app/container/AddContacts/AddContactsForm";
import { useApplicationContext } from "@/app/context/communityContext";

export default function Header() {
  const { open, setOpen, setIsUpdate } = useApplicationContext();

  const addClick = () => {
    setOpen(true);
    setIsUpdate(false);
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
        height="150px"
        border="2px solid red"
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h1>CONTACTS</h1>
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
            handleClose={handleCloseClick}
            title="ADD Contacts"
            component={<AddContactsForm />}
          />
        </Grid>
      </Grid>

      <div style={{ marginTop: "45px" }}>
        <Table />
      </div>
    </div>
  );
}
