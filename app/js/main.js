import index from '../css/index.scss';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Taking off... 🚀');
  const app = new App();
  app.init()
});