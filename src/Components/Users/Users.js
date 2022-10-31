import React from "react";
import ShowUserTable from "./ShowUserTable";
import AddUser from "./AddUser";
import Container from "@mui/material/Container";

const Users = () => {
  return (
    <Container maxWidth="xxl">
      <AddUser />
      <ShowUserTable />
    </Container>
  );
};

export default Users;
