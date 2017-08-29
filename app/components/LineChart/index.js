import React from 'react';
import { Line } from 'react-chartjs-2';
import ScreenCenter from 'components/ScreenCenter';

const options = {
  scales: {
    xAxes: [{
      ticks: {
        autoSkip: false,
      },
    }],
  },
};

class LineChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { chartData, height } = this.props;
    if (chartData && chartData.labels.length > 0) {
      return (
        <Line data={chartData} height={height} options={options} />
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

LineChart.propTypes = {
  chartData: React.PropTypes.object,
  height: React.PropTypes.number,
};

export default LineChart;
