import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import authReducer from '../pages/auth/redux/reducer';
import newTaskReducer from '../pages/newTask/redux/reducer';
import taskReducer from '../data/task/reducer';
import historyReducer from '../data/history/reducer';
import dashboardReducer from '../pages/dashboard/redux/reducer';
import userReducer from '../data/user/reducer';
import goalReducer from '../data/goal/reducer';
import timestampReducer from '../data/timestamp/reducer';
import calendarReducer from '../pages/calendar/redux/reducer';
import timestampEditorReducer from '../pages/timestampEditor/redux/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  form,  
  newTask: newTaskReducer,
  task: taskReducer,
  history: historyReducer,
  dashboard: dashboardReducer,
  user: userReducer,
  goal: goalReducer,
  timestamp: timestampReducer,
  calendar: calendarReducer,
  timestampEditor: timestampEditorReducer,
});

export default rootReducer;
