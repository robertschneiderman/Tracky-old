export { createTimestamp, updateTimestamp } from '../../../data/timestamp/actions';
export const UPDATE_TIMER = 'UPDATE_TIMER';

export const updateTimer = payload => ({
  type: UPDATE_TIMER,
  payload
});
