import {injectReducer} from '../../store/reducers';

export default (store) => ({
  path : '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HomeContainer = require('./containers/HomeContainer').default;
      const usecasesReducer = require('./modules/usecases').default;
      const milestonesReducer = require('./modules/milestones').default;

      /*  Add the reducer to the store on key 'usecases'  */
      injectReducer(store, {key: 'usecases', reducer: usecasesReducer});
      injectReducer(store, {key: 'milestones', reducer: milestonesReducer});

      /*  Return getComponent   */
      cb(null, HomeContainer);

    /* Webpack named bundle   */
    }, 'counter');
  },
});
