import App from './app';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Signup from '../pages/auth/components/Signup';
import Signin from '../pages/auth/components/Signin';
import Signout from '../pages/auth/components/Signout';
import newTask from '../pages/newTask/components';
import dashboard from '../pages/dashboard/components';
import calendar from '../pages/calendar/components';

const routes = {
  path: '/',
  name: 'App',
  indexRoute: { component: Home },
  component: App,
  childRoutes: [
    { path: 'signup', name: 'Signup', component: Signup},
    { path: 'signin', name: 'Signin', component: Signin},
    { path: 'signout', name: 'Signout', component: Signout},
    { path: 'new-task', name: 'NewTask', component: newTask},
    { path: 'dashboard', name: 'Dashboard', component: dashboard},
    { path: 'calendar', name: 'Calendar', component: calendar},
    { path: '*', name: 'Page not found', component: PageNotFound },
  ],
};

export default routes;