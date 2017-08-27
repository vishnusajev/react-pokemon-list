/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebars from 'components/SideBar';


injectTapEventPlugin();


export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          <Helmet
            titleTemplate="%s"
            defaultTitle="Project Name"
            meta={[
                { name: 'description', content: 'Project Name' },
            ]}
          />
          <div className="main-wrap">
            <Sidebars />
            <div className="content">
              <div className="container-fluid">
                {React.Children.toArray(children)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
