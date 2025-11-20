import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom';


const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 60 },
  { id: 'lastName', label: 'Last Name', minWidth: 60 },
  { id: 'email', label: 'Email', minWidth: 150 },
  { id: 'roles', label: 'Role', minWidth: 60 },
  { id: 'action', label: 'Action', minWidth: 120, align: 'center' },
];


const rows = [
  { firstName: "John", lastName: "Doe", email: "john.doe@example.com", roles: "admin" },
  { firstName: "Sarah", lastName: "Miller", email: "sarah.miller@example.com", roles: "customer" },
  { firstName: "David", lastName: "Williams", email: "david.williams@example.com", roles: "read-only" },
  { firstName: "Emma", lastName: "Johnson", email: "emma.johnson@example.com", roles: "admin" },
  { firstName: "Michael", lastName: "Brown", email: "michael.brown@example.com", roles: "customer" },
  { firstName: "Linda", lastName: "Davis", email: "linda.davis@example.com", roles: "read-only" },
  { firstName: "Robert", lastName: "Wilson", email: "robert.wilson@example.com", roles: "customer" },
  { firstName: "Sophia", lastName: "Taylor", email: "sophia.taylor@example.com", roles: "admin" },
  { firstName: "James", lastName: "Anderson", email: "james.anderson@example.com", roles: "read-only" },
  { firstName: "Olivia", lastName: "Thomas", email: "olivia.thomas@example.com", roles: "customer" },
  { firstName: "Daniel", lastName: "Moore", email: "daniel.moore@example.com", roles: "customer" },
  { firstName: "Emma", lastName: "Martin", email: "emma.martin@example.com", roles: "admin" },
  { firstName: "Christopher", lastName: "Lee", email: "chris.lee@example.com", roles: "read-only" },
  { firstName: "Patricia", lastName: "Jackson", email: "patricia.jackson@example.com", roles: "customer" },
  { firstName: "Anthony", lastName: "White", email: "anthony.white@example.com", roles: "admin" },
  { firstName: "Barbara", lastName: "Harris", email: "barbara.harris@example.com", roles: "read-only" },
  { firstName: "Steven", lastName: "Clark", email: "steven.clark@example.com", roles: "customer" },
  { firstName: "Jennifer", lastName: "Lewis", email: "jennifer.lewis@example.com", roles: "admin" },
  { firstName: "Thomas", lastName: "Walker", email: "thomas.walker@example.com", roles: "customer" },
  { firstName: "Karen", lastName: "Hall", email: "karen.hall@example.com", roles: "read-only" },
  { firstName: "Paul", lastName: "Allen", email: "paul.allen@example.com", roles: "admin" },
  { firstName: "Nancy", lastName: "Young", email: "nancy.young@example.com", roles: "customer" },
]


const roleColors = {
  admin: "#d5edf7",
  "read-only": "#fff9e6",
  customer: "#eaffea",
};

export default function UserListing() {
  const handleEdit = (row) => console.log("Edit:", row);
  const handleDelete = (row) => console.log("Delete:", row);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: 5 }}>
      <TableContainer sx={{ minHeight: 880 }}>
        <Table stickyHeader aria-label="sticky table">

          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                hover
                key={index}
                sx={{
                  backgroundColor: roleColors[row.roles] || "white",
                }}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  console.log("hryl",column);

                  if (column.id === "action") {
                    return (
                      <TableCell key={column.id} align="center">

                       <Link to={"/dashboard/editUser"} state={{row}}>
                        <IconButton color="primary" onClick={() => handleEdit(row)}>
                          <EditIcon />
                        </IconButton></Link>

                        <IconButton color="error" onClick={() => handleDelete(row)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
}
