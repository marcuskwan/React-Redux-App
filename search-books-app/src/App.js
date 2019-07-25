import React from "react";
import { connect } from "react-redux";

import { fetchByQuery, fetchByTitle, fetchByAuthor } from "./functions";

import Form from "./components/Form";
import Books from "./components/Books";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Open Library API Book Search</h1>
      <div class="header-image">
        <img
          src="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
          alt="book thumbnail"
        />
      </div>
      <Form />
      <Books />
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
  { fetchByQuery, fetchByAuthor, fetchByTitle },
)(App);
