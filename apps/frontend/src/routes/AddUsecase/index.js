import {injectReducer} from '../../store/reducers';

export default (store) => ({
  path : '/add',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AddUsecaseContainer = require('./containers/AddUsecaseContainer').default;
      const usecasesReducer = require('../Home/modules/usecases').default;
      const milestonesReducer = require('../Home/modules/milestones').default;
      const messageReducer = require('../Home/modules/message').default;

      /*  Add the reducer to the store on key 'usecases'  */
      injectReducer(store, {key: 'usecases', reducer: usecasesReducer});
      injectReducer(store, {key: 'milestones', reducer: milestonesReducer});
      injectReducer(store, {key: 'message', reducer: messageReducer});

      /*  Return getComponent   */
      cb(null, AddUsecaseContainer);

    /* Webpack named bundle   */
    }, 'addUsecase');
  },
});
