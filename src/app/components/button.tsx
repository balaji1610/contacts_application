import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
interface IProps {
  text: string;
  variant: "outlined" | "contained";
  startIcon?: React.ReactElement;
}
const Buttons = ({ text, variant, startIcon }: IProps) => (
  <Button variant={variant} startIcon={startIcon}>
    {text}
  </Button>
);

export default Buttons;
