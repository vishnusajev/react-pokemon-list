import React from 'react';
import Logo from 'images/spin-logo-inverted-@2X.png';
import Link from 'react-router/lib/Link';

class Sidebars extends React.PureComponent { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      nav: 'dashboard',
    };
  }

  handleClick = (value) => {
    this.setState({ nav: value });
  }

  render() {
    return (
      <nav className="navigation">
        <div className="navbar-inverse navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="current navbar-brand">
                <img alt="Spin Logo Inverted" className="h-20" src={Logo} />
              </div>
            </div>
          </div>
        </div>

        <aside className="navbar-default sidebar">
          <div className="sidebar-content">
            <ul className="side-menu">
              <li className={this.state.nav === 'dashboard' ? 'active' : ''}>
                <Link to="/" title="Dashboards" onClick={() => this.handleClick('dashboard')}>
                  <i className="fa fa-home fa-lg fa-fw"></i><span className="nav-label">Start</span><i className="fa arrow"></i>
                </Link>
              </li>
              <li className={this.state.nav === 'grid' ? 'active' : ''}>
                <Link to="/about" title="Grid" onClick={() => this.handleClick('grid')}>
                  <i className="fa fa-th fa-lg"></i><span className="nav-label">Widgets</span>
                  <span className="pull-right label label-primary label-outline text-uppercase">New</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </nav>
    );
  }
}

Sidebars.propTypes = {
  data: React.PropTypes.array,
};

export default Sidebars;
