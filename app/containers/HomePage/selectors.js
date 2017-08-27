import { createSelector } from 'reselect';
import { parseDate, getRandomColor } from 'containers/App/Helpers';

const selectHomeData = (state) => state.get('home');

const makeSelectRadarData = () => createSelector(
  selectHomeData,
  (homeState) => {
    const radarData = homeState.get('radarData');
    const label = [];
    const low = [];
    const medium = [];
    const heigh = [];
    if (radarData) {
      radarData.map((item) => { // eslint-disable-line
        label.push(item._id); // eslint-disable-line
        low.push(item.severity[0].count);
        medium.push(item.severity[1].count);
        heigh.push(item.severity[2].count);
      });
    }
    return {
      labels: label,
      datasets: [{ label: 'low', data: low, borderColor: '#03a9f4' },
                { label: 'medium', data: medium, borderColor: '#fbbc05' },
                { label: 'heigh', data: heigh, borderColor: '#FF6384' }],
    };
  }
);

const makeSelectAttacksOverTime = () => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get('attacksOverTime');
    const label = [];
    const data = [];
    let labelValue;
    if (apiData) {
      labelValue = apiData[0]._id; // eslint-disable-line
      apiData[0].eventsInTime.map((item) => { // eslint-disable-line
        label.push(parseDate(item._id)); // eslint-disable-line
        data.push(item.count);
      });
    }
    return {
      labels: label,
      datasets: [{ label: labelValue, data, cubicInterpolationMode: 'monotone', borderColor: '#03a9f4', pointHoverBackgroundColor: '#2BBAFD' }],
    };
  }
);

const makeSelectTopAttackedServices = () => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get('topAttackedServices');
    const label = [];
    const data = [];
    const backgroundColor = [];
    if (apiData) {
      apiData.map((item) => { // eslint-disable-line
        label.push(item._id); // eslint-disable-line
        data.push(item.count);
        backgroundColor.push(getRandomColor());
      });
    }
    return {
      labels: label,
      datasets: [{ data, backgroundColor }],
    };
  }
);

const makeSelectTopDatas = (value) => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get(value);
    const labels = [];
    const data = [];
    if (apiData) {
      apiData.map((item) => { // eslint-disable-line
        labels.push(item._id); // eslint-disable-line
        data.push(item.count);
      });
    }
    return {
      labels,
      datasets: [{ data, borderColor: 'rgba(3, 169, 244, .4)', borderWidth: 2, backgroundColor: 'rgba(3, 169, 244, .4)' }],
    };
  }
);

const makeSelectTopAttackers = () => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get('topAttackers');
    const label = [];
    const low = [];
    const medium = [];
    const heigh = [];
    if (apiData) {
      apiData.map((item) => { // eslint-disable-line
        label.push(item.attacker);
        low.push(item.severity[0].count);
        medium.push(item.severity[1].count);
        heigh.push(item.severity[2].count);
      });
    }
    return {
      labels: label,
      datasets: [{ label: 'low', data: low, borderColor: 'rgba(3, 169, 244, .4)', borderWidth: 2, backgroundColor: 'rgba(3, 169, 244, .4)' },
                { label: 'medium', data: medium, borderColor: 'rgba(251, 188, 5, .4)', borderWidth: 2, backgroundColor: 'rgba(251, 188, 5, .4)' },
                { label: 'heigh', data: heigh, borderColor: 'rgba(255, 99, 132, .4)', borderWidth: 2, backgroundColor: 'rgba(255, 99, 132, .4)' }],
    };
  }
);
const makeSelectAttackers = () => createSelector(
  selectHomeData,
  (homeState) => {
    const apiData = homeState.get('attackers');
    return apiData;
  }
);

export {
  selectHomeData,
  makeSelectRadarData,
  makeSelectAttacksOverTime,
  makeSelectTopAttackedServices,
  makeSelectTopDatas,
  makeSelectTopAttackers,
  makeSelectAttackers,
};
