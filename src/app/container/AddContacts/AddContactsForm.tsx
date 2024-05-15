import TextField from "@mui/material/TextField";

export default function AddContactsForm() {
  const fromStyle = {
    display: "grid",
    gridTemplateRows: "auto",
    rowGap: "10px",
    margin: "10px",
    padding: "30px",
  };
  return (
    <div>
      <form>
        <div style={fromStyle}>
          <div>
            <TextField label="First Name" variant="outlined" />
          </div>{" "}
          <div>
            {" "}
            <TextField label="Last Name" variant="outlined" />
          </div>
          <div>
            {" "}
            <TextField label="Email" variant="outlined" />
          </div>{" "}
          <div>
            {" "}
            <TextField label="Contact Number" variant="outlined" />
          </div>
        </div>
      </form>
    </div>
  );
}
