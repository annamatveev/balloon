import { createSelector } from 'reselect';

const selectGlobal = state => state.get('activityStream');

const selectRoute = state => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectActivityData = () =>
  createSelector(selectGlobal, globalState => globalState.get('activities'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectActivityData,
  makeSelectLocation,
};
