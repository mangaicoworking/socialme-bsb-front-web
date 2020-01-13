import React from 'react';
import Chart from "react-apexcharts";

const options = {
  labels: ['Beneficiários Ativos', 'Beneficiários Inativos', 'Beneficiários Em Aberto'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

/*
function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
*/

const series = [48, 22, 30]

const Graph3 = () => {
    return (
      <Chart 
      options={options} 
      series={series} 
      type="pie"
      height="300" />
    );
}
 
export default Graph3;