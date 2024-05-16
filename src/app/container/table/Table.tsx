import { useApplicationContext } from "@/app/context/communityContext";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridColumnMenu,
} from "@mui/x-data-grid";
import Buttons from "@/app/components/button";
import Model from "@/app/components/Model";
import AddContactsForm from "@/app/container/AddContacts/AddContactsForm";
import { useState } from "react";
import Grid from "@mui/material/Grid";
export default function Table() {
  const {
    contacts,
    setEditIndex,
    setUpdateContacts,
    contactsList,
    setIsUpdate,
    editModel,
    setContacts,
    setModel,
    editIndex,
  } = useApplicationContext();
  const editClick = (getindex: any, getdata: any) => {
    setModel(true);
    setIsUpdate(true);
    setEditIndex(getindex);
    setUpdateContacts(getdata);
  };

  const handleCloseClick = () => {
    setModel(false);
    setUpdateContacts(contactsList);
  };
  const deleteClick = (deleteId: any) => {
    setContacts((prev: any) => {
      const deleteContacts = prev.filter((el: any) => {
        return el.id != deleteId;
      });
      return deleteContacts;
    });
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S.NO",
      width: 45,
    },
    {
      field: "firstname",
      headerName: "First Name",
      width: 120,
    },
    { field: "lastname", headerName: "Last Name", width: 90 },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "contactnumber",
      headerName: "Contact Number",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Edit",
      width: 125,
      renderCell: (params: GridRenderCellParams) => (
        <Buttons
          variant="contained"
          text="EDIT"
          onClick={() => editClick(params.id, params.row)}
        />
      ),
    },
    {
      field: "action",
      headerName: "Delete",
      width: 125,
      renderCell: (params: GridRenderCellParams) => (
        <Buttons
          variant="contained"
          text="DELETE"
          onClick={() => deleteClick(params.id)}
        />
      ),
    },
  ];

  return (
    <div>
      {" "}
      <Model
        open={editModel}
        handleClose={handleCloseClick}
        title="Update Contacts"
        component={<AddContactsForm />}
      />
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div>
            <DataGrid
              rows={contacts}
              columns={columns}
              autoHeight
              hideFooterSelectedRowCount
              hideFooterPagination={true}
            />
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}
