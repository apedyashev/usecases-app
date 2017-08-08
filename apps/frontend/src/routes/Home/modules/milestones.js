import {constants as usecaseConstants} from './usecases';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [usecaseConstants.load.SUCCESS]: (state, action) => {
    return {
      ...state,
      items: {...state.items, ...action.payload.entities.milestones},
    };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  items: {},
};
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
