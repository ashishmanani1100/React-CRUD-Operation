import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import DataTable from "../DataTable/DataTable";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import { getUsers } from "../../Redux/users.slice";

const ShowUserTable = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 220,
    },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "phone",
      headerName: "Phone No.",
      width: 190,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 145,
      renderCell: (data) => {
        return (
          <Chip
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "6px",
                }}
              >
                {data.value === "Male" ? (
                  <MaleIcon sx={{ marginRight: 1 }} />
                ) : (
                  <FemaleIcon sx={{ marginRight: 1 }} />
                )}
                {data.value}
              </div>
            }
            variant="filled"
          />
        );
      },
    },
    {
      field: "website",
      headerName: "Website",
      width: 243,
    },
    {
      field: "company",
      headerName: "Company Name",
      width: 210,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      sortable: false,
      renderCell: (data) => <DeleteUser id={data.id} />,
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      sortable: false,
      renderCell: (data) => <EditUser data={data.row} />,
    },
  ];

  return <DataTable rows={userState.usersData} columns={columns} loading={userState.loading} />;
};

export default ShowUserTable;
