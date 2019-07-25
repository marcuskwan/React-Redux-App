import React from "react";
import Loader from "react-loader-spinner";

import Book from "./Book";

import PropTypes from "prop-types";

function Books({ data, isFetching, error }) {
  if (isFetching)
    return (
      <Loader type="Hearts" color="palevioletred" height={80} width={80} />
    );

  return (
    <div>
      {data.map(book => (
        <Book book={book} key={book.key} />
      ))}
    </div>
  );
}

Books.propTypes = {};

export default Books;
