
import {
  OPEN_GLOBAL_LOADER,
  CLOSE_GLOBAL_LOADER,
} from './constants';

export function showGlobalLoader() {
  return {
    type: OPEN_GLOBAL_LOADER,
    status: true,
  };
}

export function closeGlobalLoader() {
  return {
    type: CLOSE_GLOBAL_LOADER,
    status: false,
  };
}
