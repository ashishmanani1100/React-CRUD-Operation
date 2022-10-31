import React, { useEffect } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { editUser, getUsers, setUser } from "../../Redux/users.slice";
import {v1} from "uuid";

const UserFormDialog = ({ open, handleClose, data, isEdit }) => {
  
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("Name must be required"),
    username: yup.string().required("User Name must be required"),
    email: yup.string().email().required("Email must be required"),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Phone Number must be required"),
    gender: yup.string().required("Gender must be required"),
    website: yup.string().url().required("Website URL must be required"),
    company: yup.string().required("Company Name must be required"),
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setValues,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      gender: "",
      website: "",
      company: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (isEdit) {
        dispatch(editUser(values));
        dispatch(getUsers());
        resetForm();
      } else {
        dispatch(setUser({id: v1(), ...values}));
        resetForm();
      }
      handleClose();
    },
  });

  useEffect(() => {
    if (isEdit) {
      setValues(data);
    }
  }, [isEdit]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>Enter User Detail</DialogTitle>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              name="name"
              type="text"
              label="Name"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              margin="dense"
              id="username"
              name="username"
              type="text"
              label="User Name"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              type="email"
              label="Email"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              margin="dense"
              id="phone"
              name="phone"
              type="tel"
              label="Phone No."
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                id="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              margin="dense"
              id="website"
              name="website"
              type="url"
              label="Website URL"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.website}
              error={touched.website && Boolean(errors.website)}
              helperText={touched.website && errors.website}
            />
            <TextField
              margin="dense"
              id="company"
              name="company"
              type="text"
              label="Company Name"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.company}
              error={touched.company && Boolean(errors.company)}
              helperText={touched.company && errors.company}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
                resetForm();
              }}
              variant="contained"
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {isEdit ? "Edit" : "Submit"}
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default UserFormDialog;
