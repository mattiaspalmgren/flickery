const renderImages = (elem, images) => {
  elem.innerHTML = images.map(i => {
    return `
      <div class="col col-4">
        <div 
        class="image-item"
        style="background-image: url(${i.media.m})">
        </div>
      </div>
    `
  }).join('');
    
}

export default renderImages;