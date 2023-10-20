import React, { Component } from 'react';
import { imports } from './import';
class Employee_post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp_name: '',
      emp_dep: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { emp_name, emp_dep } = this.state;
    const requestData = { emp_name, emp_dep };

    fetch(imports.url + "Employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hotel created:", data);
        // Perform any necessary actions after successful creation
      })
      .catch((error) => {
        console.error("Error", error);
        // Handle the error appropriately
      });
  };

  render() {
    return (
      <div className="container">
        <br></br>
        <h2> Add a new employee</h2>
        <div>
          <div className="form-group">
            <label htmlFor="emp_name">Employee Name</label>
            <input
              type="text"
              id="emp_name"
              name="emp_name"
              className="form-control"
              onChange={this.handleInputChange}
              aria-label="Employee Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_dep">Employee Department </label>
            <input
              type="text"
              id="emp_dep"
              name="emp_dep"
              className="form-control"
              onChange={this.handleInputChange}
              aria-label="Employee Dep"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default Employee_post;