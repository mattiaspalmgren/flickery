const renderImages = (elem, images) => {
  console.log('hejhej')
  elem.innerHTML = images.map(i => {
    return `
      <div class="col col-4">
        <div class="image-item"></div>
      </div>
    `
  }).join('');
    
}

export default renderImages;