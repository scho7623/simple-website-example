import React from 'react';
import { renderRoutes } from 'react-router-config';
import TopNavContainer from './containers/TopNavContainer';
import routes from './routes';

const App = () => {
  return (
    <div>
      <TopNavContainer />
      {renderRoutes(routes)}
    </div>
  );
};

export default App;
