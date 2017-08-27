import {
  FETCH_RADAR_DATA,
  FETCH_ATTACKS_OVER_TIME,
  FETCH_TOP_ATTACKED_SERVICES,
  FETCH_TOP_ATTACKED_GROUPS,
  FETCH_TOP_TAGS,
  FETCH_TOP_ATTACKERS,
  FETCH_ATTACKERS,
  RADAR_DATA,
  ATTACKS_OVER_TIME,
  TOP_ATTACKED_SERVICES,
  TOP_ATTACKED_GROUPS,
  TOP_TAGS,
  TOP_ATTACKERS,
  ATTACKERS,
} from './constants';


export function fetchRadatChartData() {
  return {
    type: FETCH_RADAR_DATA,
  };
}

export function fetchAttacksOverTime() {
  return {
    type: FETCH_ATTACKS_OVER_TIME,
  };
}

export function fetchTopAttackedServices() {
  return {
    type: FETCH_TOP_ATTACKED_SERVICES,
  };
}

export function fetchAttackedGroups() {
  return {
    type: FETCH_TOP_ATTACKED_GROUPS,
  };
}

export function fetchTopTags() {
  return {
    type: FETCH_TOP_TAGS,
  };
}

export function fetchTopAttackers() {
  return {
    type: FETCH_TOP_ATTACKERS,
  };
}

export function fetchAttackers() {
  return {
    type: FETCH_ATTACKERS,
  };
}

export function RadarChartData(data) {
  return {
    type: RADAR_DATA,
    data,
  };
}

export function AttacksOverTime(data) {
  return {
    type: ATTACKS_OVER_TIME,
    data,
  };
}

export function TopAttackedServices(data) {
  return {
    type: TOP_ATTACKED_SERVICES,
    data,
  };
}

export function TopAttackedGroups(data) {
  return {
    type: TOP_ATTACKED_GROUPS,
    data,
  };
}

export function TopTags(data) {
  return {
    type: TOP_TAGS,
    data,
  };
}

export function TopAttackers(data) {
  return {
    type: TOP_ATTACKERS,
    data,
  };
}

export function Attackers(data) {
  return {
    type: ATTACKERS,
    data,
  };
}
