"use client";
import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";

import { Button, Input } from "@nextui-org/react";
const Services = () => {
  const sendAPIRequest = async (e) => {
    e.preventDefault();
    let data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: data,
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        // alert(data.prediction);
        setPrediction(data.prediction);
        document.getElementById("fraud").innerHTML =
          data.prediction === 1
            ? "Fraud Detected"
            : data.prediction === 0
            ? "No Fraud Detected"
            : "Error in prediction";
      });
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    amount: "",
    oldBalance: "",
    newBalance: "",
  });

  const [prediction, setPrediction] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavBar />
      <h1 className="text-3xl text-center text-bold">
        Financial Fraud detection Demo
      </h1>

      <form
        method="POST"
        action=""
        className="text-center"
        onSubmit={(e) => sendAPIRequest(e)}
      >
        <input type="submit" className="bg-green-500 p-5 rounded-lg" />

        <h1 className="text-3xl text-center text-bold mt-5" id="fraud"></h1>
      </form>
    </>
  );
};

export default Services;
