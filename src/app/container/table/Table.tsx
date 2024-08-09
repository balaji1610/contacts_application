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
import { useState, useEffect } from "react";
import Search from "@/app/container/header/Search";
import Grid from "@mui/material/Grid";
import GridList from "@/app/container/grid/grid";
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
    searchTerm,
    searchContacts,
    toggle,
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
      headerName: "FIRST NAME",
      width: 120,
    },
    { field: "lastname", headerName: "LAST NAME", width: 120 },
    {
      field: "email",
      headerName: "EMAIL",
      width: 220,
    },
    {
      field: "contactnumber",
      headerName: "CONTACT NUMBER",
      width: 150,
    },
    {
      field: "actions",
      headerName: "EDIT",
      width: 90,
      renderCell: (params: GridRenderCellParams) => (
        <Buttons
          variant="contained"
          text="EDIT"
          color="success"
          onClick={() => editClick(params.id, params.row)}
        />
      ),
    },
    {
      field: "action",
      headerName: "DELETE",
      width: 125,
      renderCell: (params: GridRenderCellParams) => (
        <Buttons
          variant="contained"
          text="DELETE"
          color="error"
          onClick={() => deleteClick(params.id)}
        />
      ),
    },
  ];

  return (
    <div>
      <div>
        {" "}
        <Search />
      </div>

      <Model
        open={editModel}
        handleClose={handleCloseClick}
        title="Update Contacts"
        component={<AddContactsForm />}
      />
      {toggle == "table" && (
        <div style={{ marginTop: "25px" }}>
          {" "}
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <div>
                <DataGrid
                  rows={searchTerm.length == 0 ? contacts : searchContacts}
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
      )}

      {/* {toggle == "grid" && <GridList />} */}
    </div>
  );
}
