// initialState
const initialState = {
  data: [],
  isFetching: false,
  error: "",
};

// action vars
export const FETCH_BY_QUERY_START = "FETCH_BY_QUERY_START";
export const FETCH_BY_QUERY_SUCCESS = "FETCH_BY_QUERY_SUCCESS";
export const FETCH_BY_QUERY_FAILURE = "FETCH_BY_QUERY_FAILURE";

export const FETCH_BY_TITLE_START = "FETCH_BY_TITLE_START";
export const FETCH_BY_TITLE_SUCCESS = "FETCH_BY_TITLE_SUCCESS";
export const FETCH_BY_TITLE_FAILURE = "FETCH_BY_TITLE_FAILURE";

export const FETCH_BY_AUTHOR_START = "FETCH_BY_AUTHOR_START";
export const FETCH_BY_AUTHOR_SUCCESS = "FETCH_BY_AUTHOR_SUCCESS";
export const FETCH_BY_AUTHOR_FAILURE = "FETCH_BY_AUTHOR_FAILURE";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BY_QUERY_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_BY_QUERY_SUCCESS:
      const docs = action.payload;
      return {
        ...state,
        isFetching: false,
        error: "",
        data: docs,
      };
    case FETCH_BY_QUERY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "Encountered an error, please try again",
      };
    case FETCH_BY_TITLE_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_BY_TITLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
      };
    case FETCH_BY_TITLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "Encountered an error, please try again",
      };
    default:
      return state;
  }
};
