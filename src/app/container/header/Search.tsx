import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { useApplicationContext } from "@/app/context/communityContext";
import { useState } from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function Search() {
  const {
    contacts,
    setContacts,
    searchTerm,
    setSearchTerm,
    searchContacts,
    setsearchContacts,
    setToggle,
    toggle,
  } = useApplicationContext();

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setToggle(newAlignment);
  };
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);

    const searchInObject = (obj: any, term: string) => {
      const lowercasedTerm = term.toLowerCase();
      return Object.values(obj).some((value: any) =>
        value.toString().toLowerCase().includes(lowercasedTerm)
      );
    };

    const filteredPeople = contacts.filter((person: any) =>
      searchInObject(person, event.target.value)
    );

    setsearchContacts(filteredPeople);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          {" "}
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          {" "}
          <ToggleButtonGroup
            exclusive
            value={toggle}
            onChange={handleAlignment}
          >
            <ToggleButton value="table" title="Table">
              <TableRowsIcon />
            </ToggleButton>
            <ToggleButton value="grid" title="Grid">
              <GridViewIcon />
            </ToggleButton>
            <ToggleButton value="list" title="List">
              <ListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}
