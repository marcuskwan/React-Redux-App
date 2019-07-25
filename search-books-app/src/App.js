import React from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";

import {
  FETCH_BY_QUERY_START,
  FETCH_BY_QUERY_SUCCESS,
  FETCH_BY_QUERY_FAILURE,
} from "./reducer";

import Form from "./components/Form";
import Books from "./components/Books";

import "./App.scss";

function App({ data, isFetching, error }) {
  const dispatch = useDispatch();
  // fetchQuery fn
  const fetchByQuery = query => {
    dispatch({ type: FETCH_BY_QUERY_START });
    axios
      .get(`//openlibrary.org/search.json?q=${query}`)
      .then(res => {
        console.log("res", res);
        dispatch({ type: FETCH_BY_QUERY_SUCCESS, payload: res.data.docs });
      })
      .catch(err => console.log(err));
  };

  // fetchtitle fn
  const fetchByTitle = title => {
    axios.get();
  };

  // fetchauthor fn
  const fetchByAuthor = author => {};

  return (
    <div className="App">
      <h1>Open Library API Book Search</h1>
      <div className="header-image">
        <img
          src="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
          alt="book thumbnail"
        />
      </div>
      <Form
        fetchByQuery={fetchByQuery}
        fetchByTitle={fetchByTitle}
        fetchByAuthor={fetchByAuthor}
      />
      <Books data={data} isFetching={isFetching} error={error} />
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  isFetching: state.isFetching,
  error: state.error,
});

export default connect(
  mapStateToProps,
  {},
)(App);
