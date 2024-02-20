/**
 * File where all the Redux logic happens: where the state lives, actions are received and dispatched to reducers.
 * Generates the object used for the application.
 */

import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

