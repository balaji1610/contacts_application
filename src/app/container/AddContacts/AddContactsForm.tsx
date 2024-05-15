import TextField from "@mui/material/TextField";

export default function AddContactsForm() {
  return (
    <div>
      <form>
        <TextField
          label="First Name"
          variant="outlined"
          sx={{ margin: "10px" }}
        />{" "}
        <TextField label="Last Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />{" "}
        <TextField label="Contact Number" variant="outlined" />
      </form>
    </div>
  );
}
