import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CtryAbout() {
  const [allCountry, setAllCountry] = useState([]);
  const [select, setSelect] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        setAllCountry(response.data);
        setSelect(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

 
  return (
    <div>
      {select
        .filter((item, index) => item.cca3 === id)
        .map((data) => {
          return (  
            <div>
              <h1> Capital: {data?.capital} </h1>
              <h2> Offical Name: {data.name.official} </h2>
              <h2> Region: {data.region} </h2>
            </div>
          );
        })}
      <Link to="/"> Back to home </Link>
    </div>
  );
}

export default CtryAbout;
