import { lazy } from 'react';
import * as paths from './paths';
import {Home} from '../../pages/home';
import {Index} from '../../pages';
import {USER_ROLE} from '../utils/auth/roles';


const routes = [
    {
        name:'Index',
        title: 'Index',
        component:Index,
        path: paths.HOME_PATH,
        options:{ title: 'Welcome to Anymarket'},
        Component: Home,
        exact: true,
        roles: [],

    },
    {
        name:'Home',
        title: 'Home',
        component:Home,
        path: paths.HOME_PATH,
        exact: true,
        roles: [USER_ROLE],

    },
];

export default routes;
