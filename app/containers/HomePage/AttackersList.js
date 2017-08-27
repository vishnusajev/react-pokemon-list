import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import LineChart from 'components/LineChart';
import DoughnutChart from 'components/DoughnutChart';
import BarChart from 'components/BarChart';
import { parseDate } from 'containers/App/Helpers';
import Identicons from 'identicons-react';

const options = {
  expandBy: 'column',  // Currently, available value is row and column, default is row
};

class AttackersList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.expandComponent = this.expandComponent.bind(this);
  }

  isExpandableRow() {
    return true;
  }

  expandComponent() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="panel panel-default bg-gray-dark">
            <div className="panel-heading">
              <div className="panel-title">Attacks Over Time</div>
            </div>
            <div className="panel-body">
              <LineChart chartData={this.props.attacksOverTime} height={200} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="panel panel-default bg-gray-dark">
            <div className="panel-heading">
              <div className="panel-title">Top Attacked Services</div>
            </div>
            <div className="panel-body">
              <DoughnutChart chartData={this.props.topAttackedServices} height={200} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="panel panel-default bg-gray-dark">
            <div className="panel-heading">
              <div className="panel-title">Top Attacked Groups</div>
            </div>
            <div className="panel-body">
              <BarChart chartData={this.props.topAttackedGroups} height={200} beginFromZero={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  dateFormat = (cell) => (parseDate(cell))
  bolt = () => (<i className="fa fa-bolt" aria-hidden="true"></i>)
  chart = () => (<i className="fa fa-pie-chart" aria-hidden="true"></i>)
  magnet = () => (<i className="fa fa-magnet" aria-hidden="true"></i>)
  globe = () => (<i className="fa fa-globe" aria-hidden="true"></i>)
  severity = () => (
    <div className="progress b-r-a-0 m-t-0 m-b-1 h-3">
      <div className="progress-bar progress-bar-cerulean" style={{ width: '80%' }}>
      </div>
      <div className="progress-bar progress-bar-success" style={{ width: '20%' }}>
      </div>
    </div>
    )
  identicon = (cell) => (<div style={{ maxHeight: '50px', paddingLeft: '30px' }}><Identicons id={`${cell}`} width={50} size={10} /></div>)

  render() {
    const { attackers } = this.props;
    return (
      <BootstrapTable
        data={attackers}
        options={options}
        expandableRow={this.isExpandableRow}
        expandComponent={this.expandComponent}
        trStyle={{ cursor: 'pointer' }}
      >
        <TableHeaderColumn dataField="attacker.ip" isKey headerAlign="center" dataAlign="center" dataFormat={this.identicon}>Identicon</TableHeaderColumn>
        <TableHeaderColumn dataField="attacker.id" headerAlign="center">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="tags" headerAlign="center">Tag</TableHeaderColumn>
        <TableHeaderColumn dataField="last_seen" dataFormat={this.dateFormat} headerAlign="center">Last Seen</TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center">Comment</TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center">Activity</TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center" dataFormat={this.severity}>Severity</TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center" dataAlign="center" dataFormat={this.bolt}><i className="fa fa-bolt" aria-hidden="true"></i></TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center" dataAlign="center" dataFormat={this.chart}><i className="fa fa-pie-chart" aria-hidden="true"></i></TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center" dataAlign="center" dataFormat={this.magnet}><i className="fa fa-magnet" aria-hidden="true"></i></TableHeaderColumn>
        <TableHeaderColumn dataField="comment" headerAlign="center" dataAlign="center" dataFormat={this.globe}><i className="fa fa-globe" aria-hidden="true"></i></TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

AttackersList.propTypes = {
  attackers: React.PropTypes.any,
  attacksOverTime: React.PropTypes.object,
  topAttackedServices: React.PropTypes.object,
  topAttackedGroups: React.PropTypes.object,
};

export default AttackersList;
