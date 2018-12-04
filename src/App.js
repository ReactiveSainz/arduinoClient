import React, { Component } from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fecthData();
  }

  fecthData = () => {
    fetch("https://arduinoserverfrank.herokuapp.com/api/registros", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log("res", res);
        this.setState({ data: res });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="humedad"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="temperatura"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }
}

export default App;
