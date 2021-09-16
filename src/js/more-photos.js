'use strict';
(() => {
  const previewList = document.querySelector('[data-preview-list]');
  const photosLoaderBtn = document.querySelector('[data-photos-loader]');
  const liBelowFold = document.querySelectorAll('[data-li-below-fold]');
  const photosBelowFold = document.querySelectorAll('[data-photos-below-fold]');
  const liBelowFoldCount = liBelowFold.length - 1;

  let photosHaveSrc = 0;
  const loadPhotos = () => {
    for (let i = 0; i <= 2; ++i) {
      liBelowFold[photosHaveSrc].classList.remove('is-hidden');
      photosBelowFold[photosHaveSrc].setAttribute('src', '#');
      // console.log(`Attribute 'src' has been set ${photosHaveSrc + 1} times`);
      photosBelowFold[photosHaveSrc].removeAttribute('data-photos-below-fold');
      if (photosHaveSrc < liBelowFoldCount) ++photosHaveSrc;
    }

    photosHaveSrc === liBelowFoldCount && photosLoaderBtn.removeEventListener('click', loadPhotos);
  };

  photosLoaderBtn.addEventListener('click', loadPhotos);
})();
