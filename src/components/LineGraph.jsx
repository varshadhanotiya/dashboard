import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Graph</h2>
      <Line data={chartData} />
    </div>
  );
}
export default LineGraph;
