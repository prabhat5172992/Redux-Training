import axios from "axios";

let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const addTodoStarted = () => ({
  type: "API CALL STARTED",
});

export const addTodoSuccess = (data) => ({
  type: "API CALL SUCCESS",
  data,
});

export const addTodoFailure = (err) => ({
  type: "API CALL FAILURE",
  err,
});

export const callApi = () => {
  return (dispatch) => {
    dispatch(addTodoStarted());
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
