import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
interface IProps {
  text: string;
  variant: "outlined" | "contained";
  startIcon?: React.ReactElement;
  onClick?: (data?: any, ee?: any) => void;
  type?: "submit";
}
const Buttons = ({ text, variant, startIcon, onClick, type }: IProps) => (
  <Button type={type} variant={variant} startIcon={startIcon} onClick={onClick}>
    {text}
  </Button>
);

export default Buttons;
