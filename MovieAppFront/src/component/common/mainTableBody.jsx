import React, { Component } from "react";
import TableBody from "@material-ui/core/TableBody";
import _ from "lodash";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class MainTableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };
  creteKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <TableBody>
        {data.map(item => (
          <TableRow key={item._id}>
            {columns.map(column => (
              <TableCell key={this.creteKey(item, column)}>
                {this.renderCell(item, column)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default MainTableBody;
