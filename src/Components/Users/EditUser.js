import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import UserFormDialog from "../Dialog/UserFormDialog";

const EditUser = ({ data }) => {
  const [edit, setEdit] = useState(false);

  const handleClickOpen = () => {
    setEdit(true);
  };

  const handleClose = () => {
    setEdit(false);
  };

  return (
    <>
      <Fab color="primary" size="small" onClick={handleClickOpen}>
        <EditIcon />
      </Fab>
      <UserFormDialog open={edit} handleClose={handleClose} data={data} isEdit={edit}/>
    </>
  );
};

export default EditUser;
