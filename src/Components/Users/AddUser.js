import React, { useState } from "react";
import Button from "@mui/material/Button";
import UserFormDialog from "../Dialog/UserFormDialog";
import Typography from "@mui/material/Typography";

const AddUser = () => {
  const [open, setOpen] = useState(false);

  const handleClickAddUser = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Users</Typography>
        <Button variant="contained" type="button" onClick={handleClickAddUser}>
          Add User
        </Button>
      </div>
      <UserFormDialog
        open={open}
        handleClose={handleClose}
        data={null}
        isEdit={false}
      />
    </>
  );
};

export default AddUser;
