import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { RiExpandUpDownFill } from "react-icons/ri";
import { getAllUsers } from "../../API/User.api";
import ThreeDotLoader from "../../commonComponent/Loading";
import { deleteUser } from "../../API/User.api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Loading from "../../commonComponent/Loading";

const columns = [
  {
    id: "firstName",
    label: "First dddName",
    symbol: (
      <div className="flex gap-2">
        <CiFilter className="scale-150" />
        <RiExpandUpDownFill />
      </div>
    ),
    minWidth: 60,
  },
  {
    id: "lastName",
    label: "Lastddd Name",
    symbol: (
      <div className="flex gap-2">
        <CiFilter className="scale-150" />
        <RiExpandUpDownFill />
      </div>
    ),
    minWidth: 60,
  },
  {
    id: "email",
    label: "Email",
    symbol: (
      <div className="flex gap-2">
        <CiFilter className="scale-150" />
        <RiExpandUpDownFill />
      </div>
    ),
    minWidth: 150,
  },
  {
    id: "role",
    label: "Role",
    symbol: (
      <div className="flex gap-2">
        <CiFilter className="scale-150" />
      </div>
    ),
    minWidth: 60,
  },
  { id: "action", label: "Action", minWidth: 60, align: "center" },
];

export default function UserListing() {
  const [rows, setRowsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.value.role);

  useEffect(() => {
  if (data === "customer") {
    navigate("/dashboard/costExplorer?group=API_OPERATION");
  }
}, [data, navigate]);

  useEffect(() => {
    async function fetchUsers() {
      
        const response = await getAllUsers("/user");
        console.log("Fetched Users:", response);
        if (response.userResponse) {
          setLoading(false);
          setRowsData(response.userResponse || []);
        }
        else if(response.status==401){
          toast.error(response.response.data.message)
        localStorage.removeItem("token")
        localStorage.removeItem("userAuthenticated")
        localStorage.removeItem("userData")
          navigate("/")
        }
     
    }
    fetchUsers();
  }, []);

  const handleEdit = (row) => console.log("Edit:", row);
  const handleDelete = async (row) => {
    console.log("Delete:", row.id);
    const response = await deleteUser(row.id);
    console.log("Delete response:", response);
    if (response.status === 200) {
      setRowsData((rows) => rows.filter((e) => e.id !== row.id));
      toast.success(response.data.message);
    } else {
      toast.error(response.error.message);
    }
  };
  if(loading){
   return<div className="w-full h-screen grid place-content-center"> <Loading className="z-50 "/></div>
  }

  return (
    <div className="  ">
      <div className="text-3xl  ml-3 font-bold mb-5"> User</div>

      <Paper
        sx={{
          width: "98%",
          height: "100%",
          overflow: "scroll",
          padding: 5,
          margin: "auto",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <div className="flex justify-between h-[45px] ">
          <div className="flex  gap-2  ">
            <div
              className={`border text-white bg-black w-40  font-bold rounded-md ${
                data != "admin" ? "hidden" : ""
              }`}
            >
              <Link
                to={"/dashboard/user/addUser"}
                className={`w-full h-full   flex justify-center items-center gap-2 `}
              >
                <IoIosAdd className="text-w hite font-extrabold scale-200" />
                Add New User
              </Link>
            </div>
          </div>
         
        </div>
        <TableContainer
          sx={{
            maxHeight: 880,
            marginTop: 2,
            overflowX: "hidden",
            overflowY: "auto",
            borderRadius: 2,
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ backgroundColor: "#e8f1ff" }}>
              <TableRow sx={{ position: "sticky", top: 0, zIndex: 9 }}>
                {columns.map((column) => {
                  if (column.id === "action" && data !== "admin") {
                    return null;
                  }
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "bold",
                        color: "#0a3ca2",
                        backgroundColor: "#e8f1ff",
                      }}
                    >
                      <div className=" flex items-center justify-between ">
                        <div>{column.label}</div>
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  hover
                  key={index}
                  sx={{
                    backgroundColor: `${index % 2 === 0 ? "#f9f9f9" : "white"}`,
                  }}
                >
                  {columns.map((column) => {
                    // Skip action column for non-admin users
                    if (column.id === "action" && data !== "admin") {
                      return null;
                    }

                    const value = row[column.id];

                    if (column.id === "action" && data === "admin") {
                      return (
                        <TableCell key={column.id}>
                          <Link to={"/dashboard/user/editUser"} state={{ row }}>
                            <IconButton
                              color="primary"
                              onClick={() => handleEdit(row)}
                            >
                              <EditIcon />
                            </IconButton>
                          </Link>

                          <IconButton
                            color="error"
                            onClick={() => handleDelete(row)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      );
                    }

                    if (column.id === "role") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <div
                            className={`w-18 h-6 rounded-sm text-[13px] flex justify-center items-center  border border-slate-300 bg-[#e8f1ff]`}
                          >
                            {value}
                          </div>
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
    </div>
  );
}
