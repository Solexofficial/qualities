import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/common/container';
import NavBar from './components/ui/NavBar';
import { QualitiesProvider } from './hooks/useQualities';
import routes from './routes';
const getRoutes = routes => {
  return routes.map((prop, key) => {
    return <Route path={prop.path} component={prop.component} key={key} />;
  });
};

function App() {
  return (
    <div className='App'>
      <NavBar routes={routes} />
      <QualitiesProvider>
        <Container>
          <Switch>
            {getRoutes(routes)}
            <Redirect to='/' />
          </Switch>
        </Container>
      </QualitiesProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
