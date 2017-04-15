const renderImages = (elem, images) => {
  elem.innerHTML = images.map(i => {
    
    return `
      <div class="col col-4">
        <div class="image__wrapper">
          <i class="spinner"></i>
          <img 
            alt="" 
            class="image__item" 
            src=${i.media.m}
            onload="imgLoaded(this)" />
        </div>
      </div>
    `
  }).join('');    
}

const imgLoaded = (img) => {
  const imgWrapper = img.parentNode;
  const spinner = img.previousSibling.previousSibling;
  imgWrapper.className += ' image__wrapper--loaded ';
  spinner.className += ' spinner--loaded'
}

window.imgLoaded = imgLoaded;

const renderError = (elem) => {
  elem.innerHTML = `
      <div class="col col-4">
        Sorry, the flickr source to be unvailable at the moment!
      </div>
    `;
}

export { renderImages, renderError };