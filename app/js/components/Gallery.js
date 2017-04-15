import jsonp from '../modules/jsonp';
import { feed, error } from '../modules/template';

class Gallery {
  constructor(elem) {
    this.elem = elem;
  }

  fetchImages (url) {
    return jsonp(url);
  }

  renderFeed (res) {
    const images = res.items;
    const { elem } = this;
    elem.innerHTML = feed(images);
  }

  renderError (res) {
    const { elem } = this; 
    elem.innerHTML = error();
  }
}

export default Gallery;