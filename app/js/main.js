import renderImages from './components/render';
import index from '../css/index.scss';

document.addEventListener('DOMContentLoaded', function() {
  console.log('Taking off... 🚀');

  const gallery = document.getElementById('gallery');
  const images = [0,1,2,3,4,5,6,7,8,9,10,12];
  renderImages(gallery, images);

});
