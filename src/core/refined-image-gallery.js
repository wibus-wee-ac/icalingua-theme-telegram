import { injectCSS, injectScript } from '../utils.js';

export function refinedImageGallery(){
  injectScript("https://unpkg.com/photoswipe@5.3.7/dist/photoswipe-lightbox.esm.js", false, () => {});
  // const lightbox = new PhotoSwipeLightbox({
  //   gallery: '#my-gallery',
  //   children: 'a',
  //   pswpModule: () => import('https://unpkg.com/photoswipe'),
  // });
  // lightbox.init();
  injectCSS("https://unpkg.com/photoswipe@5.3.7/dist/photoswipe.css");
}