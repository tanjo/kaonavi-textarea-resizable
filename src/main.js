window.addEventListener("load",() => {

  const observer = new MutationObserver((mutations) => {
    [...document.querySelectorAll('.js-popup-textarea-open')].forEach((e) => e.remove());
  });
  if (document.getElementById('window_loading')) {
    const config = { attributes: true, childList: true, characterData: true, subtree: true };
    observer.observe(document.getElementById('window_loading'), config);
    console.log('kaonavi textarea resizable!');
  }
});