import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import Layout from "./layout";
class Employee extends Component {
  render() {
    /* const columns = [
      "Name",
      "Company",
      "Department",
      "Salary",
      "City",
      "State"
    ]; */
    const columns = [
      {
        name: "Name",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Company",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Department",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Salary",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "City",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "State",
        options: {
          filter: true,
          sort: true
        }
      }
    ];

    const data = [
      ["Joe James", "Test Corp", "IoT", "$25000", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "IoT", "$25000", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "IoT", "$25000", "Tampa", "FL"],
      ["James Houston", "Test Corp", "IoT", "$25000", "Dallas", "TX"],

      ["Micheal Houston", "ABX Corp", "Electronics", "$25000", "Dallas", "NY"],
      ["Bob Houston", "ABX Corp", "AI", "$25000", "Yonkers", "CT"],
      ["James Houston", "ABX Corp", "AI", "$25000", "Tampa", "FL"],
      [
        "Joe Houston",
        "ABX Corp",
        "Computer Science",
        "$25000",
        "Hartford",
        "TX"
      ],

      ["Mohan Kumar", "ZXC Corp", "Electronics", "$25000", "Yonkers", "NY"],
      [
        "Sunil Thakur",
        "ZXC Corp",
        "Computer Science",
        "$25000",
        "Hartford",
        "CT"
      ],
      ["Binay", "ZXC Corp", "AI", "$25000", "Dallas", "FL"],
      ["Robert", "ZXC Corp", "IoT", "$25000", "Tampa", "TX"],

      ["Jonny Walsh", "FRQ Corp", "IoT", "$15000", "Dallas", "NY"],
      ["James Herm", "FRQ Corp", "AI", "$5000", "Tampa", "CT"],
      ["Rose Marry", "FRQ Corp", "Computer Science", "$2000", "Hartford", "FL"],
      ["Bob Houston", "FRQ Corp", "Electronics", "$5000", "Yonkers", "TX"]
    ];

    const options = {
      filterType: "checkbox"
    };
    return (
      <Layout>
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </Layout>
    );
  }
}

export default Employee;
