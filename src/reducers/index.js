import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import countryData from "./countryData";

export default combineReducers({
  todos,
  visibilityFilter,
  countryData,
});
