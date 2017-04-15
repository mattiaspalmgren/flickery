const feed =  (images) => {
 // Method to handle the loading spinner
 const imgLoaded = (img) => {
   const imgWrapper = img.parentNode;
   const spinner = img.previousSibling.previousSibling;
   imgWrapper.className += ' image__wrapper--loaded';
   spinner.className += ' spinner--loaded'
 }

 // Add method to window object
 window.imgLoaded = imgLoaded;

 return images.map(i => {
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

const error = () => {
  return  `
    <div class="error">
      <i class="error__icon"></i>
      <p>Sorry, the flickr source seem to be unvailable at the moment!</p>
    </div>
  `;
}

export { feed, error };