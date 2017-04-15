import Gallery from './Gallery';

class App {
  constructor(elem) {
    const galleryElem = document.getElementById('gallery');
    this.gallery = new Gallery(galleryElem);
  };

  init() {
    const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&=jsonpCallback&tags=cat';
    const { gallery } = this;
    gallery.fetchImages(url)
      .then((res) => gallery.renderFeed(res))
      .catch((res) => gallery.renderError(res))
  }
}

export default App;