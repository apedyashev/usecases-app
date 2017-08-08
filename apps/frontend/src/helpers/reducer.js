import union from 'lodash/union';
import merge from 'lodash/merge';

// created an initial state module which will be storing a list
export const makeListInitialState = (additionalValues = {}) => {
  const initialState = merge({
    pending: false,
    loaded: false,
    hasNextPage: true,
    nextPage: 1,
    items: {},
    order: [],
  }, additionalValues);

  return Object.assign({}, initialState, initialState);
};

// default reducer for list
export const listReducer = ({state, action, entity, requestTypes}) => {
  switch (action.type) {
    case requestTypes.REQUEST: {
      return {
        ...state,
        pending: true,
        loaded: false,
      };
    }

    case requestTypes.SUCCESS: {
      const {entities, result, result: {pagination}} = action.payload;
      return {
        ...state,
        pending: false,
        loaded: true,
        hasNextPage: pagination.page < pagination.pages,
        nextPage: (pagination.page < pagination.pages) ? (pagination.page + 1) : pagination.page,
        items: {
          ...state.items,
          ...entities[entity],
        },
        order: union(state.order, result.items),
      };
    }

    case requestTypes.FAILURE: {
      return {
        ...state,
        pending: false,
        loaded: false,
      };
    }

    default : {
      return state;
    }
  }
};
