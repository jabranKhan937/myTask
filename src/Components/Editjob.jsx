import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJob = () => {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/jobs/${id}`, jobs);
    history.push("/");
    toast.info("You edit job successfully", {
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

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/jobs/${id}`);
    setJobs(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Job</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Tittle:</label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              name="tittle"
              value={tittle}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Experience:</label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              name="experience"
              value={experience}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Select image:</label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Your E-mail Address"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Hourly rate:</label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              name="rate"
              value={rate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Timing:</label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Your Website Name"
              name="time"
              value={time}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="text-center mt-3">
            <a href="/">
              <button className="btn btn-danger">Cancle</button>
            </a>
            <button className="btn btn-primary ml-3">Update Job</button>
          </div>
        </form>
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

export default EditJob;
