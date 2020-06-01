import { connect } from "react-redux";
import { callApi } from "../actions";
import ApiCall from "../components/apiCall";

const mapStateToProps = ({ countryData }) => ({
  country: countryData.country,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(callApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiCall);
