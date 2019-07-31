import React, { useState } from "react";
import PropTypes from "prop-types";

function Form({ fetchByQuery, fetchByTitle, fetchByAuthor }) {
  const [input, setInput] = useState({
    query: "",
    title: "",
    author: "",
  });
  const [selectedValue, setSelectedValue] = useState("query");

  const handleSubmit = e => {
    e.preventDefault();
    if (input.query) {
      fetchByQuery(input.query);
    } else if (input.title) {
      fetchByTitle(input.title);
    } else if (input.author) {
      fetchByAuthor(input.author);
    }
    setInput({
      ...input,
      query: "",
      title: "",
      author: "",
    });
  };

  const handleChanges = e =>
    setInput({
      ...input,
      query: "",
      title: "",
      author: "",
      [e.target.name]: e.target.value,
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name={selectedValue}
          placeholder="search"
          value={input.query}
          onChange={handleChanges}
        />
        <select
          defaultValue="query"
          onChange={e => setSelectedValue(e.target.value)}>
          <option value="query">All</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button>search &rarr;</button>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
