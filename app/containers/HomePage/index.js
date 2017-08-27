/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import connect from 'react-redux/lib/components/connect';
import { createStructuredSelector } from 'reselect';
import ViewWrapper from 'components/ViewWrapper';

import RadarChart from 'components/RadarChart';
import LineChart from 'components/LineChart';
import DoughnutChart from 'components/DoughnutChart';
import BarChart from 'components/BarChart';
import AttackersList from './AttackersList';
import { fetchRadatChartData, fetchAttacksOverTime, fetchTopAttackedServices, fetchAttackedGroups, fetchTopTags, fetchTopAttackers, fetchAttackers } from './actions';
import { makeSelectRadarData, makeSelectAttacksOverTime, makeSelectTopAttackedServices, makeSelectTopDatas, makeSelectTopAttackers, makeSelectAttackers } from './selectors';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getInitialData();
  }

  render() {
    const { radarData, attacksOverTime, topAttackedServices, topAttackedGroups, topTags, topAttackers, attackers } = this.props;
    return (
      <ViewWrapper>
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                  quisquam ullam, atque eveniet enim mollitia fugit quo aut molestiae voluptas!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                  quisquam ullam, atque eveniet enim mollitia fugit quo aut molestiae voluptas!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                  quisquam ullam, atque eveniet enim mollitia fugit quo aut molestiae voluptas!
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-body">
                <RadarChart chartData={radarData} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Attacks Over Time</div>
              </div>
              <div className="panel-body">
                <LineChart chartData={attacksOverTime} height={70} />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <h3 className="panel-title">Panel with Options</h3>
              </div>
              <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                  quisquam ullam, atque eveniet enim mollitia fugit quo aut molestiae voluptas!
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Top 5 Attacked Services</div>
              </div>
              <div className="panel-body">
                <DoughnutChart chartData={topAttackedServices} height={250} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Top 5 Attacked Groups</div>
              </div>
              <div className="panel-body">
                <BarChart chartData={topAttackedGroups} height={250} beginFromZero={false} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Top 5 Attacked Tags</div>
              </div>
              <div className="panel-body">
                <BarChart chartData={topTags} height={250} stepSize={1000} beginFromZero />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Top 5 Attackers</div>
              </div>
              <div className="panel-body">
                <BarChart chartData={topAttackers} height={250} stepSize={1000} beginFromZero stackedXAxis />
              </div>
            </div>
          </div>
        </div>

        <h4 className="m-t-3">Attackers</h4>
        <AttackersList attackers={attackers} attacksOverTime={attacksOverTime} topAttackedServices={topAttackedServices} topAttackedGroups={topAttackedGroups} />
      </ViewWrapper>

    );
  }
}

HomePage.propTypes = {
  getInitialData: React.PropTypes.func,
  radarData: React.PropTypes.object,
  attacksOverTime: React.PropTypes.object,
  topAttackedServices: React.PropTypes.object,
  topAttackedGroups: React.PropTypes.object,
  topTags: React.PropTypes.object,
  topAttackers: React.PropTypes.object,
  attackers: React.PropTypes.any,
};

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: () => {
      dispatch(fetchRadatChartData()); dispatch(fetchAttacksOverTime());
      dispatch(fetchTopAttackedServices()); dispatch(fetchAttackedGroups());
      dispatch(fetchTopTags()); dispatch(fetchTopAttackers()); dispatch(fetchAttackers());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  radarData: makeSelectRadarData(),
  attacksOverTime: makeSelectAttacksOverTime(),
  topAttackedServices: makeSelectTopAttackedServices(),
  topAttackedGroups: makeSelectTopDatas('topAttackedGroups'),
  topTags: makeSelectTopDatas('topTags'),
  topAttackers: makeSelectTopAttackers(),
  attackers: makeSelectAttackers(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
