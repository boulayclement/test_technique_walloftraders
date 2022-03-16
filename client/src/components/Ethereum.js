import React, { useState, useEffect } from "react";
import logo from "../icons/icon_ethereum.png";
import "./Ethereum.css";

export function Ethereum() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/ethereum")
      .then((res) => res.json())
      .then((data) => {        
        setPrice(data.message); 
        setLoading(false);       
      })
      .catch((error) => {
        console.log(error);
      });
    const timer = setInterval(() => {
      fetch("/ethereum")
      .then((res) => res.json())
      .then((data) => {        
        setPrice(data.message); 
        setLoading(false);       
      })
      .catch((error) => {
        console.log(error);
      });
    }, 5000)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="eth">
      <img className="eth-logo" src={logo} alt="Ethereum" />
      <span className="eth-price">
        {loading ? "LOADING" : " $" + price}
      </span>      
    </div>
  );
};