import {createSelector} from 'reselect';
import pick from 'lodash/pick';

const usecasesItemsSelector = (state) => state.usecases.items;
const usecasesOrderSelector = (state) => state.usecases.order;

export const usecasesSelector = createSelector(
  usecasesItemsSelector,
  usecasesOrderSelector,
  (items, order) => order.map((jobId) => items[jobId]),
);

export const usecasesApiStatus = createSelector(
  (state) => state.usecases,
  (usecasesState) => pick(usecasesState, ['pending', 'loaded', 'hasNextPage', 'nextPage']),
);
