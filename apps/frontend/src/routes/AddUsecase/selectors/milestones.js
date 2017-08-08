import mapValues from 'lodash/mapValues';

export const milestonesItemsSelector = (state) => {
  return mapValues(state.milestones.items, (item) => ({
    id: item.id,
    start: item.startDate,
    end: item.endDate,
    content: item.name,
  }));
};
