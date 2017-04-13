import renderImages from './modules/render';
import jsonp from './modules/jsonp';
import index from '../css/index.scss';

document.addEventListener('DOMContentLoaded', function() {
  console.log('Taking off... 🚀');

  const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&=jsonpCallback&tags=cat';
  jsonp(url, renderFeed);


});

const renderFeed = (res) => {
  const images = res.items;
  const gallery = document.getElementById('gallery');
  renderImages(gallery, images);
  console.log(res);
}
