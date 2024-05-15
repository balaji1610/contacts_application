import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
interface IProps {
  text: string;
  variant: "outlined" | "contained";
  startIcon?: React.ReactElement;
  onClick: () => void;
}
const Buttons = ({ text, variant, startIcon, onClick }: IProps) => (
  <Button variant={variant} startIcon={startIcon} onClick={onClick}>
    {text}
  </Button>
);

export default Buttons;
