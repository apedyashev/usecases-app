import superagent from 'superagent';
import {normalize} from 'normalizr';
import {camelizeKeys} from 'humps';
import config from 'config';
import {errorHandler} from './errorHandler';

const http = {
  buildUrl: (endpoint) => (/^http(s)?:\/\//).test(endpoint) ? endpoint : `${config.apiBaseUrl}/${endpoint}`,

  setStore: (store) => {
    http.store = store;
  },

  get: ({url, query, shema, headers = {}}) => {
    if (!shema) {
      console.warn(`Shema is not defined for ${url}`);
    }

    return new Promise((resolve, reject) => {
      return superagent
        .get(http.buildUrl(url))
        .query(query)
        .end((err, res) => {
          if (err) {
            return errorHandler(http.store.dispatch)(err).catch(reject);
          } else {
            const camelizedJson = camelizeKeys(res.body);
            const response = Object.assign({}, normalize(camelizedJson, shema));

            return resolve({statusCode: res.statusCode, response});
          }
        });
    });
  },

  post: ({url, data, shema, headers = {}}) => {
    if (!shema) {
      console.warn(`Shema is not defined for ${url}`);
    }

    return new Promise((resolve, reject) => {
      return superagent
        .post(http.buildUrl(url))
        .send(data)
        .end((err, res) => {
          if (err) {
            return errorHandler(http.store.dispatch)(err).catch(reject);
          } else {
            const camelizedJson = camelizeKeys(res.body);
            const response = Object.assign({}, normalize(camelizedJson, shema));

            return resolve({statusCode: res.statusCode, response});
          }
          // err ? errorHandler(http.store.dispatch)(err).catch(reject) : resolve({statusCode: res.statusCode, ...res.body}))
        });
    });
  },

  //
  // put: ({url, data, query = {}, headers = {}}) =>
  //   new Promise((resolve, reject) =>
  //     superagent
  //       .put(http.buildUrl(url))
  //       .query(query)
  //       .send(data)
  //       .set({Accept: 'application/json', Authorization: http.store.getState().modules.user.auth, ...headers})
  //       .end((err, res) => err ? errorHandler(http.store.dispatch)(err).catch(reject) : resolve({statusCode: res.statusCode, ...res.body}))
  //   ),
  //
  // delete: ({url, data, query = {}, headers = {}}) =>
  //   new Promise((resolve, reject) =>
  //     superagent
  //       .delete(http.buildUrl(url))
  //       .query(query)
  //       .send(data)
  //       .set({Accept: 'application/json', Authorization: http.store.getState().modules.user.auth, ...headers})
  //       .end((err, res) => err ? errorHandler(http.store.dispatch)(err).catch(reject) : resolve({statusCode: res.statusCode, ...res.body}))
  //   )
};

export default http;
