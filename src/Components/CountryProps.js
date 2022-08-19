import React from "react";
import "./CountryProps.css";
function CountryProps({ url, officialName, capital }) {
  return (
    <div className="country-props">
      <img src={url} />
      <p>Country: {officialName}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}

export default CountryProps;
