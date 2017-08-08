const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
  const res = {};
  //eslint-disable-next-line
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}/${type}`);
  return res;
}
