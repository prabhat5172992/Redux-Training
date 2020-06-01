import React from "react";
import propTypes from "prop-types";

const ApiCall = ({ getData, country }) => {
  return (
    <div className="api-call">
      <button onClick={getData}> Get Country Data </button>
      <div className="api-call">
        <ul>
          {country && country.length
            ? country.map((item) => {
                return (
                  <div>
                    <li key={item.alpha3code}>Name: {item.name}</li>
                    <br />
                    <li key={item.alpha3code}>Capital: {item.capital}</li>
                    <br />
                    <img
                      className="flag-country"
                      src={item.flag}
                      alt={item.name}
                    />
                  </div>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

ApiCall.propTypes = {
  country: propTypes.array,
  getData: propTypes.func.isRequired,
};

export default ApiCall;
