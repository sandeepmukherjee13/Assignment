import React from 'react';
import { AgChartsReact } from 'ag-charts-react';

const PieChart = ({ data }) => {
  const options = {
    data: data,
    title: {
      text: 'Successfull Mission Completion'
    },
    series: [
      {
        type: 'pie',
        calloutLabelKey: 'mission',
        angleKey: 'price',
        innerRadiusRatio: 0.7
      }
    ]
  };
  return <AgChartsReact options={options} />;
};

export default PieChart;
