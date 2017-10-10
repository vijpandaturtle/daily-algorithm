import React, { Component } from 'react';
import './OptimizedChart.css';

import { Pie } from 'react-chartjs-2';

class OptimizedChart extends Component {
  render() {
    const pieData = {
    	labels: [
    		'Sleep',
    		'Watching TV',
    		'Shower',
        'Free time'
    	],
    	datasets: [{
    		data: [300, 50, 100, 124],
    		backgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56',
          '#FF9900'
    		],
    		hoverBackgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56',
          '#FF9900'
    		]
    	}]
    };

    return (
      <section className="col-md-4 col-sm-6 col-xs-12">
        <div className="card z-depth-1-half">
          <nav className="navbar navbar-dark deep-orange lighten-1">
            Optimized Time Usage
          </nav>
          <div className="card-chart">

            <Pie data={pieData} />

          </div>
          <div className="card-body">
            <p className="card-text text-center">In order to reach your long-term goals, the ideal day.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default OptimizedChart;
