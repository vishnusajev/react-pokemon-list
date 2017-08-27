import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ScreenCenter from 'components/ScreenCenter';

const options = {
  legend: {
    display: true,
    labels: {
      fontColor: 'rgb(255, 99, 132)',
    },
    position: 'right',
  },
};

class DoughnutChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { chartData, height } = this.props;
    if (chartData && chartData.labels.length > 0) {
      return (
        <Doughnut data={chartData} options={options} height={height} />
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

DoughnutChart.propTypes = {
  chartData: React.PropTypes.object,
  height: React.PropTypes.number,
};

export default DoughnutChart;
