import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getjobs } from "../Services/api";
import "../index.css";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import ApiSection from "./ApiSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 20,
  },
});

function Home() {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    getAlljobs();
  }, []);
  const getAlljobs = async () => {
    const response = await getjobs();
    setjobs(response.data);
  };
  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:3003/jobs/${id}`);
    getAlljobs();
    toast.info("You deleted a job successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      color: "green",
    });
  };
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="setheading">Id</span>
              </TableCell>
              <TableCell>
                <span className="setheading">job tittle</span>
              </TableCell>
              <TableCell>
                <span className="setheading">Experience</span>
              </TableCell>
              <TableCell>
                <span className="setheading">Image</span>
              </TableCell>
              <TableCell>
                <span className="setheading">Hourly Rate</span>
              </TableCell>
              <TableCell>
                <span className="setheading">Time</span>
              </TableCell>
              <TableCell>
                <span className="setheading">Edit</span>
              </TableCell>
              <TableCell>
                <span className="setheading">Delete</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow>
                <TableCell>{job.id}</TableCell>
                <TableCell>{job.tittle}</TableCell>
                <TableCell>{job.experience}</TableCell>
                <TableCell>{job.image}</TableCell>
                <TableCell>{job.rate}</TableCell>
                <TableCell>{job.time}</TableCell>
                <TableCell>
                  <Link
                    class="btn-sm btn-primary setlink"
                    to={`/editjob/${job.id}`}
                  >
                    Edit
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    className="setlink ml-2 btn-sm btn-danger"
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ApiSection />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
export default Home;
