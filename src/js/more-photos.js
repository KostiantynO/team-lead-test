'use strict';
(() => {
  const previewList = document.querySelector('[data-preview-list]');
  const photosLoaderBtn = document.querySelector('[data-photos-loader]');
  const liBelowFold = document.querySelectorAll('[data-li-below-fold]');
  const photosBelowFold = document.querySelectorAll('[data-photos-below-fold]');
  const liBelowFoldLength = liBelowFold.length;

  let photosHaveSrc = 0;
  const loadPhotos = () => {
    for (let i = 0; i < 2; ++i) {
      liBelowFold[i].classList.remove('is-hidden');

      console.log(liBelowFold[i].childNodes[1].childNodes[1]);

      photosBelowFold[i].setAttribute('src', '#');

      if (photosBelowFold[i].hasAttribute('src') === true) {
        photosBelowFold[i].removeAttribute('data-photos-below-fold');
        if (photosHaveSrc < 8) {
          ++photosHaveSrc;
        }
        console.log(photosHaveSrc);
      }
    }

    if (photosHaveSrc === previewList.childElementCount) {
      photosHaveSrc = true;
    }
    const areAllPhotosLoaded = photosHaveSrc || false;
    if (areAllPhotosLoaded === true) {
      photosLoaderBtn.removeEventListener('click', loadPhotos());
    }
  };

  photosLoaderBtn.addEventListener('click', loadPhotos);
})();
