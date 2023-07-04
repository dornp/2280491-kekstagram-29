const onPictureActions = () => {
  const thumbnailsContainer = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const closeBtn = document.querySelector('.big-picture__cancel');

  const bigPictureOpen = (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      bigPicture.classList.remove('hidden');

      const bigPictureImg = document.querySelector('.big-picture__img img');
      const bigPictureLikes = document.querySelector('.likes-count');
      const bigPictureCommentsNumber = document.querySelector('.comments-count');
      const bigPictureDescription = document.querySelector('.social__caption');
      // const bigPictureComments = document.querySelector('.social__comments');
      const thumbnailLikes = evt.target.parentElement.querySelector('.picture__likes');
      const thumbnailComments = evt.target.parentElement.querySelector('.picture__comments');
      const thumbnailDescription = evt.target.parentElement.querySelector('.picture__info');
      bigPictureImg.src = evt.target.src;
      bigPictureDescription.textContent = thumbnailDescription.getAttribute('alt');
      bigPictureLikes.textContent = thumbnailLikes.textContent;
      bigPictureCommentsNumber.textContent = thumbnailComments.textContent;
    }
  };

  const bigPictureClose = () => {
    bigPicture.classList.add('hidden');
  };

  closeBtn.addEventListener('click', bigPictureClose);
  thumbnailsContainer.addEventListener('click', bigPictureOpen);
};

export { onPictureActions };
