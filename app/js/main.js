import {renderImages, renderError } from './modules/render';
import jsonp from './modules/jsonp';
import index from '../css/index.scss';

const imgLoaded = (img) => {
  const imgWrapper = img.parentNode;
  imgWrapper.className += 'image__wrapper--loaded';
}  

document.addEventListener('DOMContentLoaded', function() {
  console.log('Taking off... 🚀');

  const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&=jsonpCallback&tags=cat';
  jsonp(url).then((res) => success(res)).catch((err) => error());

}); 

const renderFeed = (res) => {
  const images = res.items;
  const gallery = document.getElementById('gallery');
  renderImages(gallery, images);
}

const success = (res) => {
  renderFeed(res);
}

const error = () => {
  const gallery = document.getElementById('gallery');
  renderError(gallery);
}