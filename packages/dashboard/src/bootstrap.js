import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
}

// if we are in dev and in asiloation, mount with given root if
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dash-dev-root');

  if(devRoot) {
    
    // second argument is to fix error when running marketing app on isolation
    mount(devRoot);
  }
}

export { mount };