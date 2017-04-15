import Gallery from './Gallery';

class App {
  constructor(elem) {
    const galleryElem = document.getElementById('gallery');
    const search = document.getElementById('search');
    this.handleSearch = this.handleSearch.bind(this);
    this.searchImage = this.searchImage.bind(this);
    search.onsearch = this.handleSearch;
    this.gallery = new Gallery(galleryElem);
    this.search = search;
  };

  handleSearch () {
    const { gallery, search: { value} } = this;
    if (value) {
      this.searchImage(search.value);
    } else {
      gallery.clear();
    }
  }

  searchImage (tag) {
    const { gallery } = this;
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&=jsonpCallback&tags=${tag}`;
    
    gallery.fetchImages(url)
      .then((res) => gallery.renderFeed(res))
      .catch((res) => gallery.renderError(res))
  }
}

export default App;