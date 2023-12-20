import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const BarChart = () => {
  useEffect(() => {
    const xValue = ['Негативна', 'Середня', 'Позитивна'];
    const yValue = [20, 64, 183];

    const trace1 = {
      x: xValue,
      y: yValue,
      type: 'bar',
      text: yValue.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
      marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5,
        },
      },
    };

    const data = [trace1];

    const layout = {
      title: 'Кількість відгуків з різними настроями про цей готель',
      barmode: 'stack',
    };

    Plotly.newPlot('myDiv', data, layout);

    // Cleanup on component unmount
    return () => Plotly.purge('myDiv');
  }, []); // Empty dependency array to run the effect only once on mount

  return <div id="myDiv" style={{ width: '925px', height: '450px' }} />;
};

export default BarChart;