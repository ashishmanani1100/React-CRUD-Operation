import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from '@mui/material/Fab';
import DeleteDialog from "../Dialog/DeleteDialog";

const DeleteUser = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleClickDeleteIcon = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab color="primary" size="small" onClick={handleClickDeleteIcon}>
        <DeleteIcon/>
      </Fab>
      <DeleteDialog open={open} handleClose={handleClose} id={id}/>
    </>
  );
};

export default DeleteUser;
