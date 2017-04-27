import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './rootReducer.js';
import newTaskMiddleware from '../pages/newTask/redux/middleware';
import taskMiddleware from '../data/task/middleware';
import dashboardMiddleware from '../pages/dashboard/redux/middleware';
import userMiddleware from '../data/user/middleware';
import goalMiddleware from '../data/goal/middleware';
import timestampMiddleware from '../data/timestamp/middleware';
import calendarMiddleware from '../pages/calendar/redux/middleware';
import timestampEditorMiddleware from '../pages/timestampEditor/redux/middleware';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk
    ,logger 
  ,newTaskMiddleware
  ,taskMiddleware
  ,dashboardMiddleware
  ,userMiddleware
  ,goalMiddleware
  ,timestampMiddleware
  ,calendarMiddleware
  ,timestampEditorMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;