export const getScrollbarWidth = () => {
  if (!(document && window)) return 0;

  document.documentElement.style.overflowY = 'scroll';
  const width = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflowY = 'auto';

  return width;
};
