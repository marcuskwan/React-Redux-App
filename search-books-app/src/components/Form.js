import React, { useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
          <form onSubmit={event => { event.preventDefault(); }}>
        <input
          name="input"
          placeholder="search"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        >
        <select>
          <option value="Search by.." />
          <option value="Book" />
          <option value="Author" />
        </select>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
