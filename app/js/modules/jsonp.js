// const jsonp = (url, callback) => {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = url;
//   
//   window.jsonFlickrFeed = callback;
// };

// export default jsonp;

const TIMEOUT = 3000;
const jsonp = (url) => {
  return new Promise((resolve, reject) => {

    const callbackName = 'jsonFlickrFeed';
    const timeoutTrigger = window.setTimeout(() => {
      reject(new Error('Timeout'));
    }, TIMEOUT);

    window[callbackName] = (data) => {
      window.clearTimeout(timeoutTrigger);
      resolve(data);
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);

  });
}
export default jsonp;