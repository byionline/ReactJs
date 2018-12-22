import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
const styles = theme => ({
  main: {
    width: "auto",
    display: "block" /* Fix IE 11 issue. */,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
});
const NotFound = props => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Page Not Found
        </Typography>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          component={Link}
          to="/"
        >
          Home
        </Button>
      </Paper>
    </main>
  );
};
NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NotFound);
