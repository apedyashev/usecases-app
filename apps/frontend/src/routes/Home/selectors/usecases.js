import {createSelector} from 'reselect';
import pick from 'lodash/pick';
import mapValues from 'lodash/mapValues';
import {milestonesItemsSelector} from './milestones';

const usecasesItemsSelector = createSelector(
  (state) => state.usecases.items,
  milestonesItemsSelector,
  (usecases, milestones) => {
    return mapValues(usecases, (usecase) => {
      const usecaseCopy = {...usecase};
      usecaseCopy.milestones = usecase.milestones.map((id) => milestones[id]);
      return usecaseCopy;
    });
  }
);
const usecasesOrderSelector = (state) => state.usecases.order;

export const usecasesSelector = createSelector(
  usecasesItemsSelector,
  usecasesOrderSelector,
  (items, order) => order.map((jobId) => items[jobId]),
);

export const usecasesApiStatus = createSelector(
  (state) => state.usecases,
  (usecasesState) => pick(usecasesState, ['pending', 'loaded', 'hasNextPage', 'curPage', 'nextPage', 'pending']),
);
