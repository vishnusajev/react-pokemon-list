import { createSelector } from 'reselect';

const selectHomeData = (state) => state.get('home');

const makeSelectPokemonList = () => createSelector(
  selectHomeData,
  (homeState) => homeState.get('pokemonList')
);

const makeSelectPokemonHeightData = () => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get('pokemonList');
    const label = [];
    const data = [];
    let labelValue;
    if (apiData) {
      labelValue = 'Height';
      apiData.objects.map((item) => { // eslint-disable-line
        label.push(item.name); // eslint-disable-line
        data.push(item.height);
      });
    }
    return {
      labels: label,
      datasets: [{ label: labelValue, data, cubicInterpolationMode: 'monotone', borderColor: '#03a9f4', pointHoverBackgroundColor: '#2BBAFD' }],
    };
  }
);

const makeSelectPokemonWeightData = () => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get('pokemonList');
    const labels = [];
    const data = [];
    if (apiData) {
      apiData.objects.map((item) => { // eslint-disable-line
        labels.push(item.name); // eslint-disable-line
        data.push(item.weight);
      });
    }
    return {
      labels,
      datasets: [{ data, borderColor: 'rgba(3, 169, 244, .4)', borderWidth: 2, backgroundColor: 'rgba(3, 169, 244, .4)' }],
    };
  }
);

export {
  makeSelectPokemonList,
  makeSelectPokemonHeightData,
  makeSelectPokemonWeightData,
};
