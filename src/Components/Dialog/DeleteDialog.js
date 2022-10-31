import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../Redux/users.slice";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteDialog = ({ open, handleClose, id }) => {
  const dispatch = useDispatch();

  const handleClickDeleteButton = () => {
    dispatch(deleteUser(id));
    dispatch(getUsers());
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Are you sure delete this user ?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This user will be permanently deleted in the API. You cannot restore
          later.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">Cancle</Button>
        <Button onClick={handleClickDeleteButton} variant="contained">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
