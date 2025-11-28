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
import { IoIosAdd } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { CiFilter } from "react-icons/ci";
import { RiExpandUpDownFill } from "react-icons/ri";






const columns = [
  { id: 'firstName', label: 'First Name', symbol: <div className='flex gap-2'><CiFilter className='scale-150' /><RiExpandUpDownFill /></div>, minWidth: 60 },
  { id: 'lastName', label: 'Last Name', symbol: <div className='flex gap-2'><CiFilter className='scale-150' /><RiExpandUpDownFill /></div>, minWidth: 60 },
  { id: 'email', label: 'Email', symbol: <div className='flex gap-2'><CiFilter className='scale-150' /><RiExpandUpDownFill /></div>, minWidth: 150 },
  { id: 'roles', label: 'Role',symbol:<div className='flex gap-2'><CiFilter className='scale-150' /></div>, minWidth: 60 },
  { id: 'action', label: 'Action', minWidth: 60, align: 'center' },
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
  admin: "white",
  "read-only": "white",
  customer: "white",
};

export default function UserListing() {
  const handleEdit = (row) => console.log("Edit:", row);
  const handleDelete = (row) => console.log("Delete:", row);

  return (
    <>

      <Paper sx={{ width: "100%", height:"100%",overflow: "scroll", padding: 5,overflowX: "hidden", overflowY: "auto" }}>
        <div className='flex justify-between h-[45px] '>
          <div className='flex  gap-2  '>
            <div className='border text-white bg-black w-40  font-bold rounded-md '>
              <Link to={"/dashboard/user/addUser"} className='w-full h-full   flex justify-center items-center gap-2'><IoIosAdd className='text-white font-extrabold scale-200' />Add New User</Link></div>
            {/* <div className="w-40 flex justify-center items-center gap-2 "> <RxReset className='mb-1' /> Reset Filter</div> */}
          </div>
          {/* <div className='flex  gap-2  '>
            <div className='border text-white bg-black w-35 flex justify-center items-center rounded-full font-bold'>Active(20)</div>
            <div className="w-30 flex justify-center items-center"> All</div>
          </div> */}
        </div>
        <TableContainer sx={{ minHeight: 880,marginTop:2,overflowX: "hidden", overflowY: "auto" }}>
          <Table stickyHeader aria-label="sticky table">

            <TableHead sx={{backgroundColor:"#e8e7e3"}}>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold",backgroundColor:"#e8e7e3" }}
                  >
                    <div className=' flex items-center justify-between '>
                      <div className=''>{column.label}</div>
                      {column.symbol}
                    </div>
                  </TableCell>

                ))}
              </TableRow>
            </TableHead>

            <TableBody >
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

                    if (column.id === "action") {
                      return (
                        <TableCell key={column.id} align="center">

                          <Link to={"/dashboard/user/editUser"} state={{ row }}>
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
      </Paper></>
  );
}
