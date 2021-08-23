import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddJob = () => {
  const [page, setpage] = useState(1);
  function gonextpage() {
    if (page === 3) return;
    setpage((page) => page + 1);
  }
  function goback() {
    if (page === 1) return;
    setpage((page) => page - 1);
  }
  let history = useHistory();
  const [jobs, setJobs] = useState({
    tittle: "",
    experience: "",
    image: "",
    rate: "",
    time: "",
  });

  const { tittle, experience, image, rate, time } = jobs;
  const onInputChange = (e) => {
    setJobs({ ...jobs, [e.target.name]: e.target.value });
  };
  const notify = () => {
    toast.info("You added a job successfully", {
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
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/jobs", jobs);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Job</h2>
        <form onSubmit={(e) => onSubmit(e)} id="my-form">
          {page === 1 && (
            <>
              <div className="form-group">
                <label>Tittle:</label>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter job tittle"
                  name="tittle"
                  value={tittle}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Experience:</label>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter job experience"
                  name="experience"
                  value={experience}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Select image:</label>
                <input
                  type="file"
                  className="form-control form-control-lg mt-2"
                  placeholder="Choose image"
                  name="image"
                  value={image}
                  onChange={(e) => onInputChange(e)}
                  accept="image/*"
                  required
                />
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <div className="form-group">
                <label>Hourly rate:</label>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter hourly rate"
                  name="rate"
                  value={rate}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </>
          )}
          {page === 3 && (
            <>
              <div className="form-group">
                <label>Timing:</label>
                <input
                  type="text"
                  multidate="true"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter job Timing"
                  name="time"
                  value={time}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </>
          )}
        </form>
        <div className="mt-2">
          <progress
            max="3"
            value={page}
            style={{ width: "100%", color: "green" }}
          />
        </div>
        <div className="text-right mt-2">
          {page === 1 && (
            <a href="/">
              <button className="btn btn-danger">Cancel</button>
            </a>
          )}
          {page !== 1 && (
            <button className="btn btn-dark" onClick={goback}>
              Go Back
            </button>
          )}
          {page !== 3 && (
            <button className="btn btn-primary ml-2" onClick={gonextpage}>
              Go Next
            </button>
          )}
          {page === 3 && (
            <button
              className="btn btn-primary ml-2"
              type="submit"
              form="my-form"
              onClick={notify}
            >
              Add Job
            </button>
          )}
        </div>
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
        {/* Same as */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddJob;
