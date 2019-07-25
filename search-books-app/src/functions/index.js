// import usedispatch
import { useDispatch } from "react";
import axios from "axios";

import {
  FETCH_BY_QUERY_START,
  FETCH_BY_QUERY_SUCCESS,
  FETCH_BY_QUERY_FAILURE,
} from "../reducer";

// assigning dispatch var to the method
const dispatch = useDispatch();

// fetchQuery fn
export const fetchByQuery = query => {
  axios.get(`//openlibrary.org/search.json?q=${query}`);
};

// fetchtitle fn
export const fetchByTitle = title => {
  axios.get();
};

// fetchauthor fn
export const fetchByAuthor = author => {};
