export const getScrollbarWidth = () => {
  document.documentElement.style.overflowY = 'scroll';
  const width = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflowY = 'auto';
  return width;
};
