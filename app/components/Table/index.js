import React from 'react';

class Table extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { tableBody } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="small text-muted text-uppercase"><strong>Name</strong>
            </th>
            <th className="small text-muted text-uppercase"><strong>Type</strong>
            </th>
            <th className="small text-muted text-uppercase text-right"><strong>Height</strong>
            </th>
            <th className="small text-muted text-uppercase text-right"><strong>Weight</strong>
            </th>
          </tr>
        </thead>
        {tableBody}
      </table>
    );
  }
}

Table.propTypes = {
  tableBody: React.PropTypes.node,
};

export default Table;
