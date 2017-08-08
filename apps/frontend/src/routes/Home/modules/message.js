import {constants as usecaseConstants} from './usecases';

export const DESTROY_MESSAGE = 'DESTROY_MESSAGE';

export function destroyMessage() {
  return {
    type: DESTROY_MESSAGE,
  };
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [usecaseConstants.create.SUCCESS]: (state, action) => {
    return {
      text: 'Use case has been created',
    };
  },
  [usecaseConstants.create.FAILURE]: (state, action) => {
    return {
      text: 'Unable to create usecase',
    };
  },
  [DESTROY_MESSAGE]: (state, action) => ({text: null}),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  text: null,
};
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
