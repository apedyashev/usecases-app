import {schema} from 'normalizr';
import http from 'helpers/http';
import {createRequestTypes} from 'helpers/action';
import {listReducer, makeListInitialState} from 'helpers/reducer';

// ------------------------------------
// Constants
// ------------------------------------
export const constants = {
  RESET_ORDER: 'RESET_ORDER',
  load: createRequestTypes('USECASES/LOAD'),
  create: createRequestTypes('USECASES/CREATE'),
};


// ------------------------------------
// Schemas
// ------------------------------------
const milestoneSchema = new schema.Entity('milestones');
const milestonesSchemaArray = new schema.Array(milestoneSchema);
const usecaseSchema = new schema.Entity('usecases', {
  milestones: milestonesSchemaArray
});
const usecasesSchemaArray = new schema.Array(usecaseSchema);

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const loadUsecases = (page, perPage) => {
  return (dispatch, getState) => {
    dispatch({type: constants.load.REQUEST});

    return http.get({
      url: 'usecases',
      query: {page, perPage},
      shema: {items: usecasesSchemaArray}
    }).then(({response}) => {
      dispatch({
        type: constants.load.SUCCESS,
        payload: response
      });
    }).catch(() => dispatch({type: constants.load.FAILURE}));
  };
};

export const createUsecase = (data) => {
  return (dispatch, getState) => {
    dispatch({type: constants.create.REQUEST});

    return http.post({
      url: 'usecases',
      data,
      shema: {item: usecaseSchema}
    }).then(({response}) => {
      return dispatch({
        type: constants.create.SUCCESS,
        payload: response
      });
    }).catch(() => dispatch({type: constants.create.FAILURE}));
  };
};

export function functionResetOrder() {
  return {
    type: constants.RESET_ORDER,
  };
}

export const actions = {
  loadUsecases,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [constants.RESET_ORDER]: (state, action) => {
    return {
      ...state,
      order: [],
    };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = makeListInitialState();
export default function counterReducer (state = initialState, action) {
  const newState = listReducer({
    state,
    action,
    entity: 'usecases',
    requestTypes: constants.load
  });

  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action) : newState;
}
