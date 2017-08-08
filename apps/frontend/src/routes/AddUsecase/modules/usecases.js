import {schema} from 'normalizr';
import http from 'helpers/http';
import {createRequestTypes} from 'helpers/action';
import {listReducer, makeListInitialState} from 'helpers/reducer';
import {usecaseSchema} from '../../Home/modules/usecases';

// ------------------------------------
// Constants
// ------------------------------------
export const constants = {
  create: createRequestTypes('USECASES/CREATE'),
};


// ------------------------------------
// Schemas
// ------------------------------------

export const createUsecase = (page, perPage) => {
  return (dispatch, getState) => {
    dispatch({type: constants.create.REQUEST});

    http.post({
      url: 'usecases',
      shema: {item: usecaseSchema}
    }).then(({response}) => {
      dispatch({
        type: constants.create.SUCCESS,
        payload: response
      });
    }).catch(() => dispatch({type: constants.create.FAILURE}));
  };
};

export const actions = {
  createUsecase,
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
