import React from 'react';
import { Radar } from 'react-chartjs-2';
import ScreenCenter from 'components/ScreenCenter';

const options = {
  legend: {
    display: true,
    position: 'bottom',
  },
  scale: {
    ticks: {
      display: false,
    },
  },
};

class RadarChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { chartData } = this.props;
    if (chartData && chartData.labels.length > 0) {
      return (
        <Radar data={chartData} options={options} />
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

RadarChart.propTypes = {
  chartData: React.PropTypes.object,
};

export default RadarChart;
