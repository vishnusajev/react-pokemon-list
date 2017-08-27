import React from 'react';
import { Bar } from 'react-chartjs-2';
import ScreenCenter from 'components/ScreenCenter';


class BarChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        layout: {
          padding: {
            left: 10,
            top: 20,
          },
        },
        scales: {
          yAxes: [{
            stacked: this.props.stackedYAxis,
            ticks: {
              beginAtZero: this.props.beginFromZero,
              stepSize: this.props.stepSize ? this.props.stepSize : '',
              autoSkip: false,
            },
          }],
          xAxes: [{
            stacked: this.props.stackedXAxis,
            ticks: {
              autoSkip: false,
            },
          }],
        },
      },
    };
  }

  render() {
    const { chartData, height } = this.props;
    if (chartData && chartData.labels.length > 0) {
      return (
        <Bar data={chartData} options={this.state.options} height={height} />
      );
    }
    return (
      <div style={{ minHeight: '189px', position: 'relative' }}>
        <ScreenCenter>
          Loading...
        </ScreenCenter>
      </div>
    );
  }
}

BarChart.propTypes = {
  chartData: React.PropTypes.object,
  height: React.PropTypes.number,
  stepSize: React.PropTypes.number,
  beginFromZero: React.PropTypes.bool,
  stackedYAxis: React.PropTypes.bool,
  stackedXAxis: React.PropTypes.bool,
};

export default BarChart;
