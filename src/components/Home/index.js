import "./index.css";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SideBar from "../SideBar";
import { FaDollarSign, FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";

const Home = () => {
  const [populationData, setPopulationData] = useState([]);
  const [cryptoData, setCryptoData] = useState(null);
  const [isConnect, setWallet] = useState(false);
  const [errMsg, showError] = useState("");

  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        // Process data here to fit recharts data structure
        const processedData = response.data.data.map((item) => ({
          Year: item.Year,
          population: item.Population,
        }));
        setPopulationData(processedData);
      })
      .catch((error) => {
        console.error("Error fetching population data:", error);
      });
    // Fetch cryptocurrency data
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency data:", error);
      });
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        // Check if connected
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setWallet(true);
          showError("");
        }
      } else {
        setWallet(false);
        showError("MetaMask extension not detected.");
      }
    } catch (error) {
      setWallet(false);
      showError(error.message);
    }
  };

  return (
    <div className="home-bg">
      <SideBar />
      <div>
        <div className="home-top">
          <div>
            <h1 className="head">Hii Broklyn samules!</h1>
            <p className="p">Welcome to stock trading</p>
          </div>
          <div className="status">
            <button className="but" onClick={connectWallet}>
              Start tracking
            </button>
            {isConnect && <p className="p">Wallet connected successfully!</p>}
            {errMsg && <p className="p">{errMsg}</p>}
          </div>
        </div>
        <div className="chart">
          <h1 className="head-1">Year-wise population data</h1>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={populationData}
              margin={{
                top: 15,
                right: 30,
                left: 40,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="Year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="population" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <h1 className="asset">Assests</h1>
        <div className="crypto-cont">
          <div className="crypto-card">
            <SiBitcoinsv />
            <h1 className="head-1">Bitcoin</h1>
            <p>
              <FaDollarSign />
              {cryptoData &&
                cryptoData.bpi &&
                cryptoData.bpi.USD &&
                cryptoData.bpi.USD.rate}
            </p>
            <button className="but-trade">Trade</button>
          </div>
          <div className="crypto-card">
            <FaEthereum />
            <h1 className="head-1">Ethereum</h1>
            <p>
              <FaDollarSign />
              {cryptoData &&
                cryptoData.bpi &&
                cryptoData.bpi.EUR &&
                cryptoData.bpi.EUR.rate}
            </p>
            <button className="but-trade">Trade</button>
          </div>
          <div className="crypto-card">
            <FaEthereum />
            <h1 className="head-1">Ethereum</h1>
            <p>
              <FaDollarSign />
              {cryptoData &&
                cryptoData.bpi &&
                cryptoData.bpi.EUR &&
                cryptoData.bpi.EUR.rate}
            </p>
            <button className="but-trade">Trade</button>
          </div>
          <div className="crypto-card">
            <FaEthereum />
            <h1 className="head-1">Bitcoin</h1>
            <p>
              <FaDollarSign />
              {cryptoData &&
                cryptoData.bpi &&
                cryptoData.bpi.EUR &&
                cryptoData.bpi.EUR.rate}
            </p>
            <button className="but-trade">Trade</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
