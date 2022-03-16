import React, { useState, useEffect } from "react";
import logo from "../icons/icon_bitcoin_40.png";
import "./Bitcoins.css";


export function Bitcoins() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/bitcoin")
    .then((res) => res.json())
    .then((data) => {        
      setPrice(data.message); 
      setLoading(false);       
    })
    .catch((error) => {
      console.log(error);
    });
    const timer = setInterval(() => {
      fetch("/bitcoin")
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
    <div className="btc">
      <img className="btc-logo" src={logo} alt="Bitcoin" />
      <span className="btc-price">
        {loading ? "LOADING" : " $" + price}
      </span>      
    </div>
  );
};