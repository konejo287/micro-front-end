import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory, initialPath } from 'history';

const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if(onNavigate) {
    history.listen(onNavigate);
  }
  

  ReactDOM.render(<App history={history}/>, element);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;

      if(pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  };
}

// if we are in dev and in asiloation, mount with given root if
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if(devRoot) {
    
    // second argument is to fix error when running marketing app on isolation
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };