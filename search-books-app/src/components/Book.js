import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

function Book({ book }) {
  const fetchCover = coverId => {
    setTimeout(() => {
      Axios.get(`//openlibrary.org/search.json?q=${coverId}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, 1100);
  };
  return (
    <div className="book">
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </div>
  );
}

Book.propTypes = {};

export default Book;
