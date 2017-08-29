import React from 'react';

class PokemonList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { pokemonList } = this.props;
    return (
      <tbody>
        {
      pokemonList && pokemonList.length > 0 ?
        pokemonList.map((item, key) => (
          <tr key={key}>
            <td className="v-a-m">
              <div className="media media-auto">
                <div className="media-left">
                  <div className="avatar">
                    <img className="media-object img-circle" src={`https://img.pokemondb.net/artwork/${item.name.toLowerCase()}.jpg`} alt="Avatar" />
                  </div>
                </div>
                <div className="media-body">
                  <span className="text-white">{item.name}</span>
                </div>
              </div>
            </td>
            <td className="v-a-m">
              {
                item.types.map((type, i) => (
                  <span className="badge badge-danger badge-outline" key={i}>{`${type.name} `}</span>
                ))
             }
            </td>
            <td className="text-right v-a-m">
              <span className="text-white ">{item.height} cm</span>
            </td>
            <td className="text-right v-a-m">
              <span className="text-white ">{item.weight} pound</span>
            </td>
          </tr>
        ))
        :
          <tr>
            <td className="v-a-m">
              <h4>No Data</h4>
            </td>
          </tr>
      }
      </tbody>
    );
  }
}

PokemonList.propTypes = {
  pokemonList: React.PropTypes.any,
};

export default PokemonList;
