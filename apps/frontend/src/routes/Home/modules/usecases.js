import {schema} from 'normalizr';
import http from 'helpers/http';
import {createRequestTypes} from 'helpers/action';
import {listReducer, makeListInitialState} from 'helpers/reducer';

// ------------------------------------
// Constants
// ------------------------------------
export const constants = {
  load: createRequestTypes('USECASES/LOAD'),
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

    http.get({
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

export const actions = {
  loadUsecases,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
// const ACTION_HANDLERS = {
//   [constants.load.REQUEST]: (state, action) => ({...state, pending: true}),
//   [constants.load.SUCCESS]: (state, action) => {
//     return {
//       ...state,
//       pending: false,
//       items: {...state.usecases, ...action.payload.entities.usecases},
//       // milestones: {...state.milestones, ...action.payload.entities.milestones},
//     };
//   },
//   [constants.load.FAILURE]: (state, action) => ({...state, pending: false}),
// }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = makeListInitialState();
export default function counterReducer (state = initialState, action) {
  return listReducer({
    state,
    action,
    entity: 'usecases',
    requestTypes: constants.load
  });
  // const handler = ACTION_HANDLERS[action.type]
  //
  // return handler ? handler(state, action) : state
}
