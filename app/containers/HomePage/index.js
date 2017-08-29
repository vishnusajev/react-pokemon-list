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
import Table from 'components/Table';
import LineChart from 'components/LineChart';
import BarChart from 'components/BarChart';
import Link from 'react-router/lib/Link';

import { fetchPokemonList } from './actions';
import { makeSelectPokemonList, makeSelectPokemonHeightData, makeSelectPokemonWeightData } from './selectors';
import PokemonList from './pokemonList';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      pokeList: null,
    };
  }

  componentWillMount() {
    this.props.getInitialData();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.pokemonList && nextprops.pokemonList.objects.length > 0) {
      this.setState({ pokeList: nextprops.pokemonList.objects });
    }
  }

  searchPokemon(key) {
    const newPokemonList = this.props.pokemonList.objects.filter((item) => { // eslint-disable-line array-callback-return, consistent-return
      if (item.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        return item;
      }
    });
    this.setState({ pokeList: newPokemonList });
  }

  filterByType(key) {
    if (key === 'all') {
      return this.setState({ pokeList: this.props.pokemonList.objects });
    }
    const newPokemonList = this.props.pokemonList.objects.filter((item) => { // eslint-disable-line array-callback-return, consistent-return
      let filter;
        item.types.map((type) => { // eslint-disable-line
          if (type.name.toLowerCase() === key.toLowerCase()) {
            filter = item;
            return filter;
          }
        });
      return filter;
    });
    return this.setState({ pokeList: newPokemonList });
  }

  render() {
    const { pokemonHeightData, pokemonWeightData, getInitialData, pokemonList } = this.props;
    return (
      <ViewWrapper>
        <div className="row">
          <div className="col-sm-6">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Pokemon Height Chart</div>
              </div>
              <div className="panel-body">
                <LineChart chartData={pokemonHeightData} height={110} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel panel-default bg-gray-dark">
              <div className="panel-heading">
                <div className="panel-title">Pokemon Weight Chart</div>
              </div>
              <div className="panel-body">
                <BarChart chartData={pokemonWeightData} height={110} beginFromZero={false} />
              </div>
            </div>
          </div>
        </div>
        <div id="datatables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
          <div className="row">
            <h5 className="m-t-3">Pokemon List</h5>
            <div className="col-sm-6">
              <div className="dataTables_length" id="datatables-example_length">
                Filter by type:
                <select name="datatables-example_length" aria-controls="datatables-example" className="form-control input-sm width-70" onChange={(event) => this.filterByType(event.target.value)}>
                  <option value="all">All</option>
                  <option value="poison">Poison</option>
                  <option value="water">Water</option>
                  <option value="flying">Flying</option>
                  <option value="bug">Bug</option>
                  <option value="electric">Electric</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 text-right">
              <div id="datatables-example_filter" className="dataTables_filter">
                Search:
                <input type="search" className="form-control input-sm" placeholder="" aria-controls="datatables-example" onChange={(event) => this.searchPokemon(event.target.value)} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Table
                tableBody={<PokemonList pokemonList={this.state.pokeList} />}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 form-inline">
            <div className="dataTables_length" id="datatables-example_length">
            Show:
            <select name="datatables-example_length" aria-controls="datatables-example" className="form-control input-sm width-70" onChange={(event) => getInitialData(null, event.target.value)}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select> entries
          </div>
          </div>
          <div className="col-sm-12">
            <nav>
              <ul className="pager">
                {pokemonList && pokemonList.meta.previous &&
                  <li className="previous"><Link to="" onClick={(event) => { event.preventDefault(); getInitialData(pokemonList.meta.previous); }}>Previous</Link></li>
                }
                {pokemonList && pokemonList.meta.next &&
                  <li className="next"><Link to="" onClick={(event) => { event.preventDefault(); getInitialData(pokemonList.meta.next); }}>Next</Link></li>
                }
              </ul>
            </nav>
          </div>
        </div>
      </ViewWrapper>

    );
  }
}

HomePage.propTypes = {
  getInitialData: React.PropTypes.func,
  pokemonList: React.PropTypes.any,
  pokemonHeightData: React.PropTypes.object,
  pokemonWeightData: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: (page, offset) => { dispatch(fetchPokemonList(page, offset)); },
  };
}

const mapStateToProps = createStructuredSelector({
  pokemonList: makeSelectPokemonList(),
  pokemonHeightData: makeSelectPokemonHeightData(),
  pokemonWeightData: makeSelectPokemonWeightData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
