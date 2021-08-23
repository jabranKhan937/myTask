import React from "react";
import "../index.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = " https://jsonplaceholder.typicode.com/users";
const getdata = async () => {
  return await Axios.get(url);
};
export const postdata = async (user) => {
  await Axios.post(url, user);
};
const dataPost = () => {
  toast.info("You posted data successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    color: "green",
  });
  console.log("Data posted successfully");
};

const getAllUsers = async () => {
  const response = await getdata();
  toast.info("your data is on console", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  console.log(response.data);
};
const ApiSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12   text-center navback">
            <span className="setTxtSize">Api Section</span>
            <div className="mt-3">
              <button onClick={getAllUsers} className="btn btn-primary">
                Get Data On Console
              </button>
              <button onClick={dataPost} className="btn btn-primary ml-3">
                Post Data On Console
              </button>
            </div>
          </div>
        </div>
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
    </>
  );
};
export default ApiSection;
