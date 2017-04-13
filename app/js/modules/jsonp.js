const jsonp = (url, callback) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
  window.jsonFlickrFeed = callback;
};

export default jsonp;