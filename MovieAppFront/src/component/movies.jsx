import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
//import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import Typography from "@material-ui/core/Typography";
import Layout from "./layout";
import TablePagination from "@material-ui/core/TablePagination";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    page: 0,
    rowsPerPage: 5,

    //pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    /*  _id: "" is for All Genres */ const genres = [
      { _id: "", name: "All Genres" },
      ...getGenres()
    ];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      //pageSize,
      page,

      rowsPerPage,
      count,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, page, rowsPerPage);
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { page, rowsPerPage, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPagedData();
    return (
      <Layout>
        <Typography paragraph>
          Showing {totalCount} movies in the database.
        </Typography>
        <MoviesTable
          movies={movies}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Layout>
    );
  }
}
export default Movies;
