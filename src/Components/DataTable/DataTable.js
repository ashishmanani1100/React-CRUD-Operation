import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const DataTable = ({ rows, columns, loading }) => {

  const [pageSize, setPageSize] = React.useState(5);
  
  return (
    <Box sx={{ height: 631, width: 1, mt: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10]}
        loading={loading}
        autoHeight={true}
      />
    </Box>
  );
};

export default DataTable;
