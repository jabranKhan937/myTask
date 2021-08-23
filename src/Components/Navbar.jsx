import React from "react";
import "../";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12   text-center navback">
            <div className="mt-3">
              <span className="setTxtSize">
                Here is the list of jobs available
              </span>
              <span>
                <Link class="btn-sm btn-primary setlink ml-3" to="/addjob">
                  Add a job
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
