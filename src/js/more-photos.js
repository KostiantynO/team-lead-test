(() => {
  const mission = `Mission:
    1. Синхронизировать клик по картинке между мелким фото и оригиналом в модалке.
    2. Снять active-slide со всех и назначить только одной (или трем) выбранным фото.
    3. Или чтобы убирался src с фотки, которую нужно отобразить. (easy method)`;
  const btn = document.querySelector('[data-photos-list]');
  const overlay = document.querySelector('[data-gallery-modal]');
  const modalImgSrc = document.querySelector('[data-gallery-image]');
  const body = document.querySelector('body');
  const btnBack = document.querySelector('[data-gallery-back]');
  const btnNext = document.querySelector('[data-gallery-next]');

  alert(`${refs.mission}`);
  let listImg = [];
  listImg.push(...btn.childNodes);

  /*
const listMap = listImg.filter((num) => {
    return num.nodeName === "LI"
})
const listImgPicture = listMap.map((num) => {
    return num.children[0].children[0].children[0].attributes[0].nodeValue
})
let counter = 0;


const modalOpen = (even) => {
    even.preventDefault()
    if (even.target.nodeName !== "IMG") {
        return
    }
    counter = Number(even.target.parentElement.attributes.id.value);
    btnNext.addEventListener('click', nextImg);
    btnBack.addEventListener('click', backImg)
    bodyEl.setAttribute("style", "overflow: hidden");
    modalImgSrc.setAttribute('src', listImgPicture[counter]);
    backdrop.classList.add('is-active');
    backdrop.addEventListener('click', modalClose)
}
const nextImg = () => {
    if (counter === 11) {
        return
    }
    counter = counter + 1;
    console.log(counter);
    modalImgSrc.setAttribute('src', listImgPicture[counter]);
}
const backImg = () => {
    if (counter === 0) {
        return
    }
    counter = counter - 1
    console.log(counter)
    modalImgSrc.setAttribute('src', listImgPicture[counter]);
}
const modalClose = (even) => {
    even.preventDefault()
    if (even.target.className !== "backdrop is-active") {
        return
    }
    bodyEl.setAttribute("style", "");
     modalImgSrc.setAttribute('src', '');
    backdrop.removeEventListener('click', modalClose)
    backdrop.classList.remove('is-active');
}
btn.addEventListener('click', modalOpen); */
})();
