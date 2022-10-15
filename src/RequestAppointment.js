import React from 'react'
import { FaUser,FaEnvelope,FaPhoneSquareAlt,FaCalendar,FaBirthdayCake} from "react-icons/fa";
import Navbar from './Navbar';

export default function RequestAppointment() {
  return (
    <div>
      <Navbar islogin={true} />
    <h3>RequestAppointment</h3>

    <div className="mb-3">
      <FaUser/>
      <label>Name</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Name"
      />
    </div>

    <div className="mb-3">
    <FaEnvelope/>
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>

    <div className="mb-3">
    <FaUser/>
      <label>Psychologist Name</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Name"
      />
    </div>

    <div className="mb-3">
    <FaCalendar/>
      <label>Test Date</label>
      <input
        type="date"
        className="form-control"
        placeholder="Enter Date"
      />
    </div>

    <div className="mb-3">
    <FaBirthdayCake/>
      <label>Birthday</label>
      <input
        type="date"
        className="form-control"
        placeholder="Enter Date"
      />
    </div>


    <div className="mb-3">
    <FaPhoneSquareAlt/>
      <label>Number</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Number"
      />
    </div>

    <div className="d-grid">
      <button className="btn btn-primary" >
        Submit
      </button>
    </div>
  </div>
  )
}
