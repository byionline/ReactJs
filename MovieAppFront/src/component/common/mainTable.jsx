import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";

import Paper from "@material-ui/core/Paper";

import TableHeader from "./tableHeader";
import MainTableBody from "./mainTableBody";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});
const MainTable = props => {
  const { columns, sortColumn, onSort, data, classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <MainTableBody columns={columns} data={data} />
      </Table>
    </Paper>
  );
};
MainTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainTable);
//export default Table;
