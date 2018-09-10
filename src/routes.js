import HomePageContainer from './containers/HomePageContainer';
import AboutPageContainer from './containers/AboutPageContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePageContainer,
  },
  {
    path: '/about',
    component: AboutPageContainer,
  },
];

export default routes;
