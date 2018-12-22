import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "./layout";
class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Typography paragraph>Dashboard</Typography>
      </Layout>
    );
  }
}
export default Dashboard;
