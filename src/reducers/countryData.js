const countryData = (state = [], action) => {
  switch (action.type) {
    case "API CALL SUCCESS":
      return {
        ...state,
        country: action.data,
      };
    case "API CALL FAILURE":
      return {
        ...state,
        error: "API Failed!!",
      };
    default:
      return state;
  }
};

export default countryData;
