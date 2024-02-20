/**
 * File where all the Redux logic happens: where the state lives, actions are received and dispatched to reducers.
 * Generates the object used for the application.
 */

import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // optional

import { rootReducer } from './root-reducer';

const middleWares = [logger];
const composedEnhacers = compose(applyMiddleware(...middleWares));

/**
 * First parameter: the root reducer
 * Second parameter: extra state
 * Third parameter: procedures to be executed before an action executes a reducer
 */
export const store = legacy_createStore(rootReducer, undefined, composedEnhacers);